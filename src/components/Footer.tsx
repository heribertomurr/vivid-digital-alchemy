import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Dribbble, Mail, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Landing Pages", href: "#" },
    { label: "E-commerce", href: "#" },
    { label: "SaaS Platforms", href: "#" },
    { label: "Web Applications", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Careers", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                  <span className="text-xl font-bold text-background">W</span>
                </div>
                <span className="text-xl font-bold">WebStudio</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                We craft stunning digital experiences that convert visitors into
                customers. Premium web design for ambitious brands.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@webstudio.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@webstudio.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 (555) 123-4567
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebStudio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
