import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page website",
      "Mobile responsive",
      "Basic SEO",
      "2 rounds of revisions",
      "30-day support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,999",
    description: "Ideal for growing companies",
    features: [
      "10-page website",
      "Advanced animations",
      "Full SEO optimization",
      "Unlimited revisions",
      "90-day support",
      "CMS integration",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale projects",
    features: [
      "Unlimited pages",
      "Custom features",
      "E-commerce ready",
      "Priority support",
      "Dedicated project manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
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
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transparent <span className="underline decoration-[hsl(var(--warm-brown))] decoration-2 underline-offset-4">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. Choose the plan that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-foreground/30 bg-secondary/50"
                    : "hover:border-foreground/20"
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/project</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "gradient" : "gradient-outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
