import { motion } from "framer-motion";
import {
  Layers,
  ShoppingCart,
  Rocket,
  Building2,
  Palette,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Landing Pages",
    description: "High-converting pages that drive results and maximize your ROI.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description: "Beautiful online stores that sell and scale with your business.",
  },
  {
    icon: Rocket,
    title: "SaaS Platforms",
    description: "Scalable web applications built for growth and performance.",
  },
  {
    icon: Building2,
    title: "Corporate Websites",
    description: "Professional brand presence that builds trust and authority.",
  },
  {
    icon: Palette,
    title: "Portfolio Sites",
    description: "Showcase your work beautifully with stunning visual designs.",
  },
  {
    icon: Code2,
    title: "Custom Web Apps",
    description: "Tailored solutions built specifically for your unique needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="underline decoration-[hsl(var(--warm-brown))] decoration-2 underline-offset-4">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From stunning landing pages to complex web applications, we craft digital
            experiences that drive real business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full shine-effect transition-all duration-300 hover:border-foreground/20">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
