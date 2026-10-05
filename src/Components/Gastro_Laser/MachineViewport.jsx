import React from "react";

/** A fixed, responsive stage matching the reference video's front-facing view. */
export default function MachineViewport({ children, onMachineClick, stageClassName = "" }) {
    return (
        <div
            className="relative grid w-full place-items-center overflow-hidden bg-white"
            onClick={(event) => {
                if (event.target.closest?.("[data-machine-part]")) onMachineClick();
            }}
            role="button"
            tabIndex={0}
            aria-label="Click the machine to explore its components"
            onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return;
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onMachineClick();
                }
            }}
        >
            <div className={`machine-stage-frame relative h-[520px] w-full sm:aspect-[800/680] sm:h-auto ${stageClassName}`}>
                {children}
            </div>
        </div>
    );
}
