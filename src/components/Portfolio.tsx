import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    industry: "Finance",
    description: "A comprehensive analytics dashboard for modern banking.",
  },
  {
    title: "E-commerce Platform",
    industry: "Retail",
    description: "Luxury fashion brand with seamless shopping experience.",
  },
  {
    title: "SaaS Marketing Site",
    industry: "Technology",
    description: "High-converting landing page for AI startup.",
  },
  {
    title: "Healthcare Portal",
    industry: "Healthcare",
    description: "Patient management system with intuitive UX.",
  },
  {
    title: "Real Estate Platform",
    industry: "Real Estate",
    description: "Property listing with virtual tour integration.",
  },
  {
    title: "EdTech Application",
    industry: "Education",
    description: "Interactive learning platform for modern students.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Recent <span className="underline decoration-[hsl(var(--warm-brown))] decoration-2 underline-offset-4">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing digital experiences that drive real business results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full hover:border-foreground/20 transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className="relative h-48 md:h-56 bg-secondary overflow-hidden">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), 
                                         linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 rounded-lg bg-background border border-border shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-3">
                      <div className="w-full h-2 bg-muted rounded mb-2" />
                      <div className="w-3/4 h-2 bg-muted rounded mb-2" />
                      <div className="w-1/2 h-2 bg-foreground/30 rounded" />
                    </div>
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-background font-medium">
                      View Case Study
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
