import { motion } from "motion/react";
import { TrendingUp, Calendar, UserCheck, ShoppingCart, ArrowRight, Sparkles } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden rounded-[4rem] mx-4 md:mx-12 my-24" id="case-study">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-brand-100 mb-8">
            <Sparkles size={12} className="text-brand-400" />
            The Proof
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
            How we helped a <br className="hidden md:block" />
            multi-million dollar <br />
            <span className="text-brand-600">LA contractor</span> <br />
            find <span className="text-white">$154,545</span>.
          </h2>

          <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-xl">
            For Home2Renovate (H2R), a Home Improvement Contractor, we sent exactly one sequence to 109 previous customers. Our AI system reactivated buried interest and turned old deals with forgotten customers into immediate new revenue, saving them thousands of dollars in lead purchases.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 mb-12">
            <StatItem label="Found Revenue" value="$154,545" icon={TrendingUp} />
            <StatItem label="Appointments" value="17" icon={Calendar} />
            <StatItem label="Total Sales" value="10" icon={ShoppingCart} />
            <StatItem label="Sits Completed" value="10" icon={UserCheck} />
            <StatItem label="Repurchased" value="5" icon={Sparkles} />
          </div>

          <div className="p-8 glass-dark rounded-3xl border-white/10 bg-white/5 backdrop-blur-3xl">
            <p className="text-lg italic text-brand-100/90 mb-6 font-medium leading-relaxed">
              "We sent one text to 109 customers. 5 of them repurchased immediately. The AI found money that was literally sitting in our CRM for years."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center font-bold">RR</div>
              <div>
                <p className="font-bold text-white">Owner, Home2Renovate</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">HOME IMPROVEMENT CO.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Mockup UI inspired by reference image */}
          <div className="glass-dark border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/40 backdrop-blur-2xl">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <span className="font-bold text-sm tracking-tight">Active Pulse AI</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
            </div>
            
            <div className="p-8 space-y-8">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Database Scan</span>
                  <span className="text-[10px] font-black bg-brand-600/20 text-brand-400 px-2 py-0.5 rounded">SCANNED</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-brand-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 block">Live Conversation Output</span>
                <div className="space-y-4">
                  <ChatBubble 
                    side="left" 
                    text="Hey John, hope the house is holding up well... We're doing spring checkups nearby." 
                    color="border-brand-600" 
                  />
                  <ChatBubble 
                    side="right" 
                    text="Glad you reached out, the master bath needs work now. Can you come by?" 
                    color="border-pink-500" 
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-600/40"
              >
                Launch Reactivation System
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

          {/* Decorative floating stats */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 p-6 glass-dark rounded-2xl border-white/10 shadow-2xl bg-white/5"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <UserCheck className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Sits Completed</p>
                <p className="text-xl font-bold">10 Sits</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="group">
      <div className="flex items-center gap-3 mb-2">
        <Icon size={16} className="text-brand-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-brand-400 transition-colors">
          {label}
        </span>
      </div>
      <div className="text-3xl font-black text-white">{value}</div>
    </div>
  );
}

function ChatBubble({ side, text, color }: { side: 'left' | 'right', text: string, color: string }) {
  return (
    <div className={`p-4 rounded-2xl border-l-4 ${color} bg-white/5 text-sm leading-relaxed max-w-[85%] ${side === 'right' ? 'ml-auto text-right' : ''}`}>
      {text}
    </div>
  );
}
