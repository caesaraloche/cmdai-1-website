import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function FooterCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden" id="footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-slate-200" />
      
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden mb-24 bg-white/70">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/5 via-transparent to-indigo-600/5" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900">
              Ready to find the gold <br /> in your CRM?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join the elite contractors who are scaling their businesses with industry-specific AI reactivation. Most businesses see new contracts in their first 2 weeks.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-6 bg-brand-600 text-white font-black text-xl rounded-2xl flex items-center gap-3 mx-auto shadow-2xl shadow-brand-600/40 hover:shadow-brand-600/60 transition-all"
              id="final-cta"
            >
              Book a Call
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 uppercase tracking-tighter">
              <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center font-bold text-white text-[10px]">C</div>
              <span className="text-xl font-black text-slate-900">CloseMoreDeals<span className="text-brand-600">AI</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              The premium AI agency for construction industry veterans who want to dominate their local market using systems, not just sweat.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="#" />
              <SocialIcon href="#" />
              <SocialIcon href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-3 hover:text-brand-600 transition-colors cursor-pointer">
                <Mail size={18} className="text-brand-600" />
                caesar@closemoredealsai.com
              </li>
              <li className="flex items-center gap-3 hover:text-brand-600 transition-colors cursor-pointer">
                <Phone size={18} className="text-brand-600" />
                (877) 711-3424
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-600" />
                Lakewood, CA
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#hero" className="hover:text-brand-600 transition-colors">Home</a></li>
              <li><a href="#solutions" className="hover:text-brand-600 transition-colors">Solutions</a></li>
              <li><a href="#case-study" className="hover:text-brand-600 transition-colors">Proof</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {currentYear} CloseMoreDealsAI.com. All rights reserved.</p>
          <p className="font-medium">Built by contractors for contractors.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href }: { href: string }) {
  return (
    <a href={href} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-600 transition-all hover:scale-110">
      <div className="w-4 h-4 bg-white/20 rounded-sm" />
    </a>
  );
}
