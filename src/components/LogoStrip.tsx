import { motion } from "framer-motion";

const logos = [
  { name: "Acme Corp", initials: "AC" },
  { name: "TechFlow", initials: "TF" },
  { name: "Innovate", initials: "IN" },
  { name: "Quantum", initials: "QT" },
  { name: "Vertex", initials: "VX" },
  { name: "Nebula", initials: "NB" },
  { name: "Horizon", initials: "HZ" },
  { name: "Stellar", initials: "ST" },
  { name: "Apex", initials: "AX" },
  { name: "Nova", initials: "NV" },
];

const LogoStrip = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border/50 bg-secondary/30">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10"
        >
          Trusted by industry leaders
        </motion.p>

        {/* Logo Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos */}
          <div className="flex logo-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:opacity-100 opacity-60">
                  <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center group-hover:border-[hsl(var(--gradient-purple))]/50 transition-colors">
                    <span className="text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                      {logo.initials}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
