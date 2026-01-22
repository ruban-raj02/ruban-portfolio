import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: Array<{
    name: string;
    bgColor: string;
    darkBgColor: string;
    icon: string;
  }>;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Modern Financial Tracker",
    description:
      "A modern financial tracker app that helps users track their finances and make informed decisions.",
    techStack: [
      { name: "Next.js", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Supabase", bgColor: "#E8F9F0", darkBgColor: "#1a2d24", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Razorpay", bgColor: "#E3F2FD", darkBgColor: "#252525", icon: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
    ],
    image: "/assets/MoneyFlowSnap.PNG",
    liveUrl: "https://money-flow-febf3.web.app/",
    githubUrl: "https://github.com/ruban-raj02/MoneyFlow",
  },
  {
    title: "Movie Discovery Platform",
    description:
      "A Platfrom that uses to discover movies and their information about cast, crew and trailers.",
    techStack: [
      { name: "React", bgColor: "#E8F9FD", darkBgColor: "#1a2a2d", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", bgColor: "#E8F4FC", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Netlify", bgColor: "#E5FAF8", darkBgColor: "#1a2d2a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],
    image: "/assets/FilmlySnap.PNG",
    liveUrl: "https://filmly-movies.netlify.app/",
    githubUrl: "https://github.com/ruban-raj02/Filmly",
  },
  {
    title: "Workshop Management System",
    description:
      "A comprehensive web application for workshop to manage and automate online queries to get more online engagement.",
    techStack: [
      { name: "Next.js", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Maps API", bgColor: "#E8F5E9", darkBgColor: "#1a2d1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Whatsapp API", bgColor: "#E8F5E9", darkBgColor: "#1a2d1a", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    ],
    image: "/assets/ABUSnap.PNG",
    liveUrl: "https://arun-bullet-works-madurai.web.app/",
    githubUrl: "https://github.com/ruban-raj02/Arun-Bullet-Works",
  },
  {
    title: "News Aggregator Platform",
    description:
      "A news blog platform that aggregates various news articles from different sources and presents them in a user-friendly interface.",
    techStack: [
      { name: "React", bgColor: "#E8F9FD", darkBgColor: "#1a2a2d", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", bgColor: "#E8F5E9", darkBgColor: "#1a2d1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "News API", bgColor: "#EEF7FC", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    image: "/assets/BuzzedSnap.PNG",
    liveUrl: "https://buzzed-news-blog.netlify.app/",
    githubUrl: "https://github.com/ruban-raj02/Buzzed-News-Blog",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A Tic-Tac-Toe game built with Javascript where users can create NxN grids and play against each other.",
    techStack: [
      { name: "Javascript", bgColor: "#FFFDE7", darkBgColor: "#2d2a1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", bgColor: "#FEF3F0", darkBgColor: "#2d1f1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", bgColor: "#EEF7FC", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    image: "/assets/TTTSnap.PNG",
    liveUrl: "https://tic-tac-toe-v8.netlify.app/",
    githubUrl: "https://github.com/ruban-raj02/Tic-Tac-Toe",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05, 
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <div className="bg-card rounded-3xl border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
        {/* Project Image */}
        <div className="h-48 relative overflow-hidden bg-secondary">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full text-muted-foreground"
                style={{
                  backgroundColor: `var(--tech-bg-${tech.name.replace(/[.\s]/g, '-')}, ${tech.bgColor})`
                }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-3.5 h-3.5 object-contain flex-shrink-0"
                  style={{
                    filter: tech.name === "Next.js" ? "var(--icon-invert, none)" : "none"
                  }}
                />
                {tech.name}
                <style>{`
                  @media (prefers-color-scheme: dark) {
                    :root.dark {
                      --tech-bg-${tech.name.replace(/[.\s]/g, '-')}: ${tech.darkBgColor};
                      --icon-invert: invert(1);
                    }
                  }
                  .dark {
                    --tech-bg-${tech.name.replace(/[.\s]/g, '-')}: ${tech.darkBgColor};
                    --icon-invert: invert(1);
                  }
                `}</style>
              </span>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-semibold">
            A selection of projects I've worked on, showcasing my skills and
            experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};