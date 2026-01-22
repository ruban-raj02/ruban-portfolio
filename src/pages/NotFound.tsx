import { motion, Variants } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const numberVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        {/* Large Typography 404 */}
        <motion.div variants={numberVariants} className="mb-12">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-foreground/5 select-none text-center">
            404
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="relative -mt-32 md:-mt-48 lg:-mt-64 text-center space-y-6">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Page not found
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Sorry, we couldn't find the page you're looking for. Perhaps you've
            mistyped the URL or the page has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              Go to Homepage
            </motion.a>

            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} />
              Go Back
            </motion.button>
          </motion.div>

          
          {/* Footer Note */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-muted-foreground pt-12 italic"
          >
            Error Code: 404 — This page doesn't exist
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;