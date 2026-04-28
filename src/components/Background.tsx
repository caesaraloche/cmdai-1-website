import { motion } from "motion/react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" id="bg-container">
      {/* Base Light Layer */}
      <div className="absolute inset-0 bg-slate-50" />
      
      {/* Animated Gradients (Subtle Light Mode) */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -20, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px]"
      />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ 
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>
  );
}
