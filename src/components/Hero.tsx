import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Hammer } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden" id="hero">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 blur-[120px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold text-brand-700 mb-8 uppercase tracking-wider"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
        </span>
        Built for Home Improvement Contractors by Contractors
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] max-w-4xl text-slate-900 mb-8"
      >
        Turn your old deals <br /> into <span className="text-brand-600 italic">new revenue.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed"
      >
        Your database is full of homeowners that know you, trust you, and most likely need more work done. We tee-up the appointment, you sell another deal without having to purchase a new lead.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="px-10 py-5 bg-brand-600 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50">
          Book a Call
          <ArrowRight size={20} />
        </button>
        <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all border border-slate-200 shadow-sm">
          See How It Works
        </button>
      </motion.div>

      {/* Floating Icons for context */}
      <div className="absolute top-1/4 left-10 opacity-40 hidden lg:block">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="p-4 glass rounded-2xl">
          <Hammer className="text-brand-600" size={32} />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-40 hidden lg:block">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="p-4 glass rounded-2xl">
          <Bot className="text-brand-600" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
