import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="underline decoration-[hsl(var(--warm-brown))] decoration-4 underline-offset-8">Amazing?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's bring your vision to life. Get a free consultation and discover
            how we can transform your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="gradient" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="gradient-outline" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Or schedule a free 30-minute strategy call
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
