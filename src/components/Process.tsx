import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep to understand your vision, goals, and target audience. This phase sets the foundation for everything we build.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Crafting pixel-perfect mockups that bring your brand to life. We iterate until every detail is exactly right.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Building with modern tech stack for speed, security, and scalability. Clean code that's built to last.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy to production with confidence. We provide ongoing support to ensure your success long after launch.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-secondary/20">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[hsl(var(--gradient-blue))] uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process that delivers exceptional results, every time.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-8 text-center h-full group hover:bg-card/80 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue))] flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg shadow-[hsl(var(--gradient-purple))]/30">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-6 mt-4 group-hover:bg-[hsl(var(--gradient-purple))]/10 transition-colors">
                    <step.icon className="w-8 h-8 text-[hsl(var(--gradient-purple))]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
