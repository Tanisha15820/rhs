import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import imgTop from '../../assets/images/avicenna_top.svg';
import imgMid1 from '../../assets/images/avicenna_mid1.svg';
import imgMid2 from '../../assets/images/avicenna_mid2.svg';
import imgBase from '../../assets/images/avicenna_base.svg';

const KeyPoint = ({ title, description, position, side = 'left', lineWidth = 55 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`pointer-events-none absolute z-[100] hidden lg:flex ${side === 'bottom' ? 'flex-col items-center' : 'items-center'} ${position}`}
    >
      {side === 'right' && (
        <div className="flex items-center">
          <div className="h-[1px] bg-[#1677FF]" style={{ width: `${lineWidth}px` }} />
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
        </div>
      )}
      <div className="min-w-[150px] rounded-[10px] border border-[#2F80ED]/60 bg-white px-3 py-2 shadow-sm">
        <div className="flex items-start gap-2">
          <div className="mt-[1px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-md bg-[#1677FF]/10">
            <div className="h-[11px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
          </div>
          <div>
            <h4 className="text-[10px] font-semibold leading-tight text-slate-900">{title}</h4>
            <p className="mt-[2px] whitespace-nowrap text-[7px] leading-[1.4] text-slate-400">{description}</p>
          </div>
        </div>
      </div>
      {side === 'left' && (
        <div className="flex items-center">
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
          <div className="h-[1px] bg-[#1677FF]" style={{ width: `${lineWidth}px` }} />
        </div>
      )}
    </motion.div>
  );
};

const MobileKeyPoint = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.3, delay: index * 0.04 }}
      className="flex min-h-[58px] items-start gap-2.5 rounded-[10px] border border-[#2F80ED]/20 bg-white p-2.5 shadow-sm"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1677FF]/10">
        <div className="h-[12px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
      </div>
      <div className="min-w-0">
        <h4 className="text-[11px] font-semibold leading-[1.3] text-slate-900">{title}</h4>
        <p className="mt-0.5 text-[9px] leading-[1.4] text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

const machinePoints = [
  { title: 'High-Res Display', description: 'Real-time surgical visualization' },
  { title: 'Control Console', description: 'Touch-based parameter setup' },
  { title: 'Processing Unit', description: 'Core engine and light source' },
  { title: 'Mobile Cart Base', description: 'Heavy-duty medical casters' },
];

const AvicennaMachine = () => {
  const [isExploded, setIsExploded] = useState(false);
  const GAP = 50;

  const toggleMachine = () => setIsExploded(prev => !prev);
  const getExplodeStyle = (level) => ({
    transform: isExploded ? `translateY(${level * GAP}px)` : 'translateY(0px)',
  });

  return (
    <section className="relative overflow-hidden bg-white py-[15px]">
      <div className={`relative mx-auto flex w-full max-w-[1000px] items-center justify-center px-4 transition-all duration-500 ${isExploded ? 'min-h-[540px] sm:min-h-[700px] lg:min-h-[950px]' : 'min-h-[480px] sm:min-h-[630px] lg:min-h-[850px]'}`}>
        
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677FF]/[0.05] blur-[100px]" />

        <div className="relative z-20 flex h-[480px] w-[300px] cursor-pointer items-center justify-center sm:h-[630px] sm:w-[340px] lg:h-[850px] lg:w-[480px]" onClick={toggleMachine}>
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint title="High-Res Display" description="Real-time surgical visualization" position="left-[-100px] top-[120px]" side="left" lineWidth={70} />
                <KeyPoint title="Control Console" description="Touch-based parameter setup" position="right-[20px] top-[260px]" side="right" lineWidth={70} />
                <KeyPoint title="Processing Unit" description="Core engine and light source" position="left-[-80px] top-[420px]" side="left" lineWidth={75} />
                <KeyPoint title="Mobile Cart Base" description="Heavy-duty medical casters" position="right-[-200px] top-[620px]" side="right" lineWidth={75} />
              </>
            )}
          </AnimatePresence>

          <div className="absolute left-1/2 top-1/2 h-[1050px] w-[520px] -translate-x-1/2 -translate-y-1/2 scale-[0.45] sm:scale-[0.6] lg:scale-[0.85] origin-center">
            <img src={imgTop} alt="Avicenna Display" draggable={false} style={getExplodeStyle(-1.5)} className="pointer-events-none absolute left-[10px] top-[20px] z-10 w-[500px] h-[300px] select-none object-contain transition-transform duration-500 mix-blend-multiply" />
            <img src={imgMid1} alt="Avicenna Console" draggable={false} style={getExplodeStyle(-0.5)} className="pointer-events-none absolute left-[60px] top-[300px] z-20 w-[400px] h-[200px] select-none object-contain transition-transform duration-500 mix-blend-multiply" />
            <img src={imgMid2} alt="Avicenna Processing" draggable={false} style={getExplodeStyle(0.5)} className="pointer-events-none absolute left-[60px] top-[480px] z-30 w-[400px] h-[250px] select-none object-contain transition-transform duration-500 mix-blend-multiply" />
            <img src={imgBase} alt="Avicenna Base" draggable={false} style={getExplodeStyle(1.5)} className="pointer-events-none absolute left-[10px] top-[710px] z-40 w-[500px] h-[300px] select-none object-contain transition-transform duration-500 mix-blend-multiply" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 w-full max-w-[520px] px-4 lg:hidden">
        <motion.button type="button" onClick={toggleMachine} whileTap={{ scale: 0.97 }} className="mx-auto flex items-center gap-2 rounded-full border border-[#1677FF]/15 bg-[#1677FF]/[0.04] px-4 py-2 text-[10px] font-medium text-[#1677FF]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1677FF] text-white">+</span>
          {isExploded ? 'Hide machine details' : 'Tap to explore machine'}
        </motion.button>
        <AnimatePresence>
          {isExploded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
              <div className="mt-4 grid grid-cols-1 gap-2 min-[430px]:grid-cols-2">
                {machinePoints.map((point, index) => <MobileKeyPoint key={point.title} {...point} index={index} />)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AvicennaMachine;
