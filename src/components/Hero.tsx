import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, X } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadClick = () => {
    setShowPrompt(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Ruban-Resume.pdf';
    link.download = 'Ruban-Resume.pdf';
    link.click();
    setShowPrompt(false);
  };

  const handleCancel = () => {
    setShowPrompt(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 
          'linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-16 md:mb-6"
            >
              Full-Stack Developer
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              Ruban Raj
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full h-4 overflow-visible"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="25%" stopColor="#FFE66D" />
                    <stop offset="50%" stopColor="#4ECDC4" />
                    <stop offset="75%" stopColor="#45B7D1" />
                    <stop offset="100%" stopColor="#96E6A1" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M2 6 Q 50 9, 100 6 Q 150 3, 198 6"
                  stroke="url(#underlineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            I craft beautiful, performant web experiences with modern
            technologies. Passionate about clean code and intuitive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="min-w-[180px] h-12 text-base font-medium"
              onClick={handleDownloadClick}
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="min-w-[180px] h-12 text-base font-medium"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>

      {/* Download Prompt Modal */}
      {showPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={handleCancel}
          />
          
          {/* Prompt Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed left-4 right-4 top-1/2 -translate-y-1/2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:inset-x-auto sm:w-[400px] md:w-[450px] z-50"
          >
            <div className="bg-card border border-border rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleCancel}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-1.5 rounded-full hover:bg-secondary/80 transition-colors z-10"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowDown className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Download Resume</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                  Do you want to download Ruban's resume?
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 h-11 text-base"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 h-11 text-base"
                    onClick={handleDownload}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};