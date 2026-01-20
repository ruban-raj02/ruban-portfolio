import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                 I’m a front-end focused full-stack developer with a strong passion for design and a deep interest in building seamless, user-centric web experiences. I enjoy transforming ideas into intuitive, visually engaging interfaces while ensuring the underlying systems are robust and scalable.
              </p>
              <p>
                  My journey into tech began with a curiosity about how the web works, which gradually evolved into a career where I solve real-world problems through code. I specialize in React, Next.js, and Node.js, with a primary focus on crafting high-quality front-end experiences, while remaining comfortable working across the full stack. I’m always eager to explore new tools, technologies, and better ways to build for the web.
              </p>
              <p>
                   Beyond coding, I enjoy exploring modern UI/UX trends, small contribution to open-source projects, and sharing knowledge with the developer community. I strongly believe in writing clean, maintainable code and building products that create meaningful impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
