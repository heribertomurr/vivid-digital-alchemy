import { motion } from "framer-motion";
import { Zap, Smartphone, Search, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed and performance. Your site loads in milliseconds, not seconds. We obsess over every kilobyte.",
    metric: "< 1s",
    metricLabel: "Load Time",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Flawless on every device. From desktop to mobile, your site adapts perfectly to any screen size.",
    metric: "100%",
    metricLabel: "Mobile Score",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built to rank and be discovered. We implement best practices to help you dominate search results.",
    metric: "Top 10",
    metricLabel: "Rankings",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Grow without limitations. Our solutions scale with your business, handling millions of visitors effortlessly.",
    metric: "99.9%",
    metricLabel: "Uptime",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-card/50">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="underline decoration-[hsl(var(--warm-brown))] decoration-2 underline-offset-4">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every website we build is engineered for speed, accessibility, and growth.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:border-foreground/20 transition-all duration-300 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Metric */}
                <div className="flex-shrink-0 w-full md:w-auto">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="md:hidden">
                      <div className="text-3xl font-bold text-foreground">
                        {feature.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {feature.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                </div>

                {/* Metric (Desktop) */}
                <div className="hidden md:block flex-shrink-0 text-right">
                  <div className="text-4xl font-bold text-foreground">
                    {feature.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {feature.metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
