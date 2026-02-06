import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    industry: "Finance",
    description: "A comprehensive analytics dashboard for modern banking.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "E-commerce Platform",
    industry: "Retail",
    description: "Luxury fashion brand with seamless shopping experience.",
    color: "from-[hsl(var(--gradient-purple))]/20 to-[hsl(var(--gradient-blue))]/20",
  },
  {
    title: "SaaS Marketing Site",
    industry: "Technology",
    description: "High-converting landing page for AI startup.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Healthcare Portal",
    industry: "Healthcare",
    description: "Patient management system with intuitive UX.",
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    title: "Real Estate Platform",
    industry: "Real Estate",
    description: "Property listing with virtual tour integration.",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "EdTech Application",
    industry: "Education",
    description: "Interactive learning platform for modern students.",
    color: "from-violet-500/20 to-purple-500/20",
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
          <span className="text-sm font-medium text-[hsl(var(--gradient-cyan))] uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Recent <span className="gradient-text">Work</span>
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
              <div className="glass-card rounded-2xl overflow-hidden h-full">
                {/* Project Image Placeholder */}
                <div
                  className={`relative h-48 md:h-56 bg-gradient-to-br ${project.color} overflow-hidden`}
                >
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-3">
                      <div className="w-full h-2 bg-muted rounded mb-2" />
                      <div className="w-3/4 h-2 bg-muted rounded mb-2" />
                      <div className="w-1/2 h-2 bg-[hsl(var(--gradient-purple))]/50 rounded" />
                    </div>
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      View Case Study
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[hsl(var(--gradient-purple))] transition-colors">
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
