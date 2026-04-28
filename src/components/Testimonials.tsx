import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "Owner, Thorne Roofing Co.",
    content: "We had a list of 2,000 old leads gathering dust. CloseMoreDealsAI reactivated enough business in the first 30 days to pay for a whole year of their service. These guys actually know roofing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, Elite Exteriors",
    content: "The AI conversations are indistinguishable from my best appointment setters. But it never gets tired and never forgets to follow up. It's been a game changer for our Q1 numbers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "CEO, Chen Mechanical",
    content: "Finally, an agency that doesn't just promise 'leads'. They deliver booked estimates. Their construction background shows in every script and workflow they build for us.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden" id="proof">
      {/* Background elements to match Image 1 aesthetic in light mode */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-50/50 to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-slate-200" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-6 text-slate-900 tracking-tighter"
          >
            What people say
          </motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Discover what our satisfied customers have to say about their experiences with our construction-first AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center text-center group bg-white/70"
              id={`testimonial-${idx}`}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-brand-600 transition-colors duration-500 shadow-md">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-600 p-1.5 rounded-full shadow-lg">
                  <Star size={12} className="text-white fill-white" />
                </div>
              </div>

              <h4 className="text-xl font-bold mb-1 text-slate-900">{t.name}</h4>
              <p className="text-brand-600 text-xs font-bold mb-6 uppercase tracking-widest">{t.role}</p>
              
              <div className="relative">
                <span className="absolute -top-4 -left-4 text-6xl text-slate-100 font-serif">“</span>
                <p className="text-slate-600 leading-relaxed italic relative z-10">
                  {t.content}
                </p>
                <span className="absolute -bottom-4 -right-4 text-6xl text-slate-100 font-serif leading-none">”</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
