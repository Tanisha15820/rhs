import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Magnet, CheckCircle2, Clock } from "lucide-react";
import vaporTunnelImg from "../../assets/images/cyber_ho_150_vapor_tunnel.jpg";
import virtualBasketImg from "../../assets/images/cyber_ho_150_virtual_basket.jpg";

const CyberHo150VaporTunnel = () => {
  const advantages = [
    {
      title: "NO EXTRA COSTS",
      desc: "These modes do not need dedicated and more expensive fibers, bringing the mentioned advantages without extra expenses.",
      icon: DollarSign,
    },
    {
      title: "MAGNETIC EFFECT",
      desc: "These modes allow stone ablation while holding the target in place, without inducing stone retropulsion.",
      icon: Magnet,
    },
    {
      title: "EASIER TREATMENT",
      desc: "With a more stable target, lithotripsy treatment can proceed easily with fewer hassles.",
      icon: CheckCircle2,
    },
    {
      title: "TIME SAVING",
      desc: "Less stone retropulsion prevents the time-consuming fiber repositioning, whereas enhanced energy transmission increases the ablation rate.",
      icon: Clock,
    },
  ];

  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 border border-blue-500/20 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">
              Advanced Stone Control
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight"
          >
            Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Virtual Basket™</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">Vapor Tunnel™</span>
          </motion.h2>
        </div>

        {/* Two Technologies Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 mb-20">
          
          {/* Vapor Tunnel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl bg-slate-800/50 border border-slate-700 p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl transition-opacity group-hover:bg-cyan-500/20"></div>
            
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">Vapor Tunnel™</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Consisting of a Single Specific Long Pulse, this emission mode allows limited retropulsion and fine stone ablation. 
              The Vapor Tunnel™ is designed in order to use the minimum peak power in accordance with selected output settings.
            </p>
            <p className="text-xs text-slate-400 mb-6 border-l-2 border-cyan-500 pl-3 italic">
              This long bubble touching the target represents a direct connection between fiber tip and stone, granting enhanced energy delivery.
            </p>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
              <img src={vaporTunnelImg} alt="Vapor Tunnel" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Virtual Basket */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl bg-slate-800/50 border border-slate-700 p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-opacity group-hover:bg-blue-500/20"></div>
            
            <h3 className="text-2xl font-bold mb-3 text-blue-400">Virtual Basket™</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Composed of a Double Pulse Emission, combines a low retropulsion with a fragment suction effect.
              The time duration separating the two pulses is chosen so that the second pulse is emitted from the distal tip of the fiber when the bubble size is at a maximum.
            </p>
            <p className="text-xs text-slate-400 mb-6 border-l-2 border-blue-500 pl-3 italic">
              As the pulse ends, the bubble collapses. The stone is dragged backwards together with the collapsing bubble (like a virtual basket).
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
              <img src={virtualBasketImg} alt="Virtual Basket" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>
          </motion.div>

        </div>

        {/* 4 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30">
                  <Icon size={24} />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{adv.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{adv.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberHo150VaporTunnel;
