import { useCallback, useEffect, useState } from "react";

const CROSSFADE_MS = 150;
const PART_MOTION_MS = 560;
const PART_STAGGER_MS = 52;

/**
 * Shared assembly timeline for every machine page.
 *
 * Part layers stay mounted at their exact assembled positions. The click first
 * crossfades the assembled render into those aligned transparent layers, then
 * moves them outward in a short top-to-bottom sequence. Reassembly reverses
 * that order before crossfading back to the intact render.
 */
export default function useMachineAssembly(partCount = 1) {
    const [phase, setPhase] = useState("assembled");
    const motionDuration = PART_MOTION_MS + Math.max(0, partCount - 1) * PART_STAGGER_MS;

    useEffect(() => {
        let timer;
        if (phase === "preparingOut") {
            timer = window.setTimeout(() => setPhase("exploding"), CROSSFADE_MS);
        } else if (phase === "exploding") {
            timer = window.setTimeout(() => setPhase("exploded"), motionDuration);
        } else if (phase === "assembling") {
            timer = window.setTimeout(() => setPhase("handoffIn"), motionDuration);
        } else if (phase === "handoffIn") {
            timer = window.setTimeout(() => setPhase("assembled"), CROSSFADE_MS);
        }
        return () => window.clearTimeout(timer);
    }, [phase, motionDuration]);

    const toggle = useCallback(() => {
        setPhase((current) => {
            if (current === "assembled") return "preparingOut";
            if (current === "preparingOut" || current === "handoffIn") return current === "preparingOut" ? "handoffIn" : "preparingOut";
            if (current === "exploding" || current === "exploded") return "assembling";
            return "exploding";
        });
    }, []);

    const assemble = useCallback(() => {
        setPhase((current) => {
            if (current === "preparingOut") return "handoffIn";
            if (current === "exploding" || current === "exploded") return "assembling";
            return current;
        });
    }, []);

    const getPartStyle = useCallback((rank, transform) => {
        const idleTransform = "translate(0px, 0px)";
        const base = {
            transform: idleTransform,
            opacity: 0,
            pointerEvents: phase === "assembled" ? "none" : "auto",
            transition: `transform ${PART_MOTION_MS}ms cubic-bezier(.22,.72,.2,1), opacity ${CROSSFADE_MS}ms ease`,
            transitionDelay: "0ms",
            filter: "none",
        };

        if (phase === "preparingOut") {
            return { ...base, opacity: 1, transition: `opacity ${CROSSFADE_MS}ms ease` };
        }
        if (phase === "exploding" || phase === "exploded") {
            return {
                ...base,
                transform,
                opacity: 1,
                transition: `transform ${PART_MOTION_MS}ms cubic-bezier(.22,.72,.2,1) ${rank * PART_STAGGER_MS}ms, opacity ${CROSSFADE_MS}ms ease`,
            };
        }
        if (phase === "assembling") {
            return {
                ...base,
                transform: idleTransform,
                opacity: 1,
                transition: `transform ${PART_MOTION_MS}ms cubic-bezier(.22,.72,.2,1) ${(partCount - rank - 1) * PART_STAGGER_MS}ms, opacity ${CROSSFADE_MS}ms ease`,
            };
        }
        if (phase === "handoffIn") {
            return { ...base, transition: `opacity ${CROSSFADE_MS}ms ease` };
        }
        return base;
    }, [phase, partCount]);

    const isSeparated = () => phase === "exploding" || phase === "exploded" || phase === "assembling";

    return {
        phase,
        isSeparated,
        activeRank: -1,
        machineOpacity: phase === "assembled" || phase === "handoffIn" ? 1 : 0,
        showParts: true,
        showMachine: true,
        showCallouts: phase === "exploded",
        getPartStyle,
        toggle,
        assemble,
    };
}
