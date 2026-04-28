import { motion } from "motion/react";
import { Zap, ShieldCheck, BarChart3, Construction } from "lucide-react";

const features = [
  {
    title: "Raise Old Sales From The Dead",
    description: "Your database is a goldmine! But you're too busy to call hundreds of people or drive out to see them for new business. We get them ready for you so you don't have to.",
    icon: Zap,
    color: "from-blue-500/20 to-cyan-500/0"
  },
  {
    title: "Systems That Speak Homeowner",
    description: "We aren't tech nerds in a basement. We know the home-improvement business, and how to talk to homeowners. Our system uses the right language that gets your clients to open the door to see you.",
    icon: Construction,
    color: "from-brand-600/20 to-brand-600/0"
  },
  {
    title: "Ready To Close Appointments?",
    description: "Forget \"leads.\" We deliver appointments! Most owners buy leads, then hope to make an appointment, often going through 4 to 5 before even 1 is set. Our system does the heavy lifting to deliver warm appointments on your lap at a fraction of the cost of buying new leads.",
    icon: BarChart3,
    color: "from-purple-500/20 to-pink-500/0"
  }
];

export function ValueProp() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="solutions">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900"
        >
          Stop Leaving <span className="text-brand-600">Money</span> on the Table
        </motion.h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Most contractors wait for old customers to call them back. What if they call someone else instead?
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative p-8 glass rounded-[2rem] overflow-hidden bg-white/70"
            id={`feature-${idx}`}
          >
            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-500">
                <feature.icon className="text-brand-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
