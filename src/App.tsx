import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProp } from "./components/ValueProp";
import { Testimonials } from "./components/Testimonials";
import { FooterCTA } from "./components/FooterCTA";
import { CaseStudy } from "./components/CaseStudy";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-900 bg-slate-50 selection:bg-brand-600/10 tracking-tight">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <section className="py-12 border-y border-slate-200 bg-white/40">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">
              Trusted by industry leaders across North America
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <Logo name="ROOFING" />
              <Logo name="WINDOWS" />
              <Logo name="KITCHENS" />
              <Logo name="POOLS" />
              <Logo name="PAINTERS" />
            </div>
          </div>
        </section>

        <ValueProp />

        {/* Industry Focus Section */}
        <section className="py-24 px-6 md:px-12 bg-white/30 border-y border-slate-200 relative overflow-hidden" id="agency">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/5 blur-[100px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
           
           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h3 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-6">Our Advantage</h3>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">We know the home improvement business...</h2>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 The biggest flaw and failure of generic agencies is that they don't understand how your business works. We do, because we've been in the industry for over a decade. We understand how you roll and what makes a successful home improvement company thrive. Most importantly, a healthy pipeline full of deals.
               </p>
               <div className="space-y-6">
                 <AdvantageItem title="Industry Specific Vocabulary" description="Our AI is trained on the right terminology and knows how to build immediate trust." />
                 <AdvantageItem title="Optimized Scheduling" description="We can book appointments automatically without you lifting a finger, and we can assign them to team members for you, based on your current calendar." />
                 <AdvantageItem title="Zero Latency Follow-up (Optional)" description="We all know missing a call can cost you a deal and thousands of dollars. We can follow up with missed calls within seconds so you don't miss a beat." />
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative lg:p-12"
             >
               <div className="aspect-square glass rounded-[3rem] relative overflow-hidden shadow-2xl group">
                 <img 
                    src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
                   alt="Roofing construction" 
                   className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                 <div className="absolute bottom-8 left-8 p-6 glass rounded-2xl border-white backdrop-blur-3xl max-w-xs bg-white/90 shadow-xl">
                   <p className="text-brand-600 font-bold mb-2 text-xs uppercase tracking-widest">Did you know?</p>
                   <p className="text-sm text-slate-700 font-medium leading-relaxed">Companies that follow up within 5 minutes are 9x more likely to convert into signed contracts.</p>
                 </div>
               </div>
               
               {/* Decorative floating card */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute -top-6 -right-6 md:top-12 md:-right-12 p-6 glass rounded-2xl shadow-2xl hidden sm:block bg-white/90 border-white"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">New Contract Booked</p>
                     <p className="font-bold text-slate-900">$24,500 - Full Roof</p>
                   </div>
                 </div>
               </motion.div>
             </motion.div>
           </div>
        </section>

        <CaseStudy />
        <Testimonials />
        <FooterCTA />
      </main>
    </div>
  );
}

function Logo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded bg-slate-900" />
      <span className="font-black text-xl tracking-tighter text-slate-900">{name}</span>
    </div>
  );
}

function AdvantageItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 group cursor-default">
      <div className="mt-1 w-5 h-5 rounded-full border-2 border-brand-100 flex items-center justify-center flex-shrink-0 group-hover:border-brand-600 transition-all">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
      <div>
        <h4 className="font-bold mb-1 text-slate-900 group-hover:text-brand-600 transition-colors">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
