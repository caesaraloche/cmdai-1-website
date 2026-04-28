import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-slate-200 bg-white/70"
      id="main-nav"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-brand-600/20">
          C
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          CloseMoreDeals<span className="text-brand-600">AI</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="#solutions">Solutions</NavLink>
        <NavLink href="#agency">Agency</NavLink>
        <NavLink href="#case-study">Proof</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          Sign in
        </button>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2 bg-brand-600 text-white text-sm font-semibold rounded-full flex items-center gap-2 transition-shadow hover:shadow-lg hover:shadow-brand-600/20"
          id="nav-cta"
        >
          Book a Call
          <ChevronRight size={16} />
        </motion.button>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-600 transition-all group-hover:w-full" />
    </a>
  );
}
