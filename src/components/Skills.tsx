import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  color: string;
  bgColor: string;
  darkBgColor: string;
  icon: string;
}

const skillsRow1: Skill[] = [
  { name: "HTML5", color: "#E34F26", bgColor: "#FEF3F0", darkBgColor: "#2d1f1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", color: "#1572B6", bgColor: "#EEF7FC", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", bgColor: "#FFFDE7", darkBgColor: "#2d2a1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", color: "#61DAFB", bgColor: "#E8F9FD", darkBgColor: "#1a2a2d", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", color: "#000000", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", color: "#339933", bgColor: "#E8F5E9", darkBgColor: "#1a2d1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", color: "#000000", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", color: "#47A248", bgColor: "#E8F5E9", darkBgColor: "#1a2d1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Supabase", color: "#3ECF8E", bgColor: "#E8F9F0", darkBgColor: "#1a2d24", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "SQL", color: "#4479A1", bgColor: "#EEF5FA", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
];

const skillsRow2: Skill[] = [
  { name: "PostgreSQL", color: "#4169E1", bgColor: "#EDF1FC", darkBgColor: "#1a1f2d", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", color: "#FFCA28", bgColor: "#FFF8E1", darkBgColor: "#2d2a1a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "GitHub", color: "#181717", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitHub Actions", color: "#2088FF", bgColor: "#E8F3FF", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
  { name: "Vercel", color: "#000000", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Netlify", color: "#00C7B7", bgColor: "#E5FAF8", darkBgColor: "#1a2d2a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  { name: "VS Code", color: "#007ACC", bgColor: "#E8F4FC", darkBgColor: "#1a2530", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Notion", color: "#000000", bgColor: "#F5F5F5", darkBgColor: "#252525", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
  { name: "ChatGPT", color: "#10A37F", bgColor: "#E8F7F3", darkBgColor: "#1a2d24", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude", color: "#D97757", bgColor: "#FCF0ED", darkBgColor: "#2d1f1a", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg" },
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <div
    className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border transition-transform hover:scale-105 dark:border-border/50 flex-shrink-0"
    style={{ 
      backgroundColor: `var(--skill-bg, ${skill.bgColor})`,
    }}
  >
    <img 
      src={skill.icon} 
      alt={skill.name}
      className="w-5 h-5 object-contain flex-shrink-0 dark:invert-0"
      style={{
        filter: skill.name === "Express.js" || skill.name === "Next.js" || skill.name === "Vercel" || skill.name === "Notion" || skill.name === "GitHub" 
          ? "var(--icon-invert, none)" 
          : "none"
      }}
    />
    <span className="text-sm font-medium text-foreground whitespace-nowrap">{skill.name}</span>
    <style>{`
      @media (prefers-color-scheme: dark) {
        :root.dark [data-skill="${skill.name}"] {
          --skill-bg: ${skill.darkBgColor};
          --icon-invert: invert(1);
        }
      }
      .dark [data-skill="${skill.name}"] {
        --skill-bg: ${skill.darkBgColor};
        --icon-invert: invert(1);
      }
    `}</style>
  </div>
);

const InfiniteCarousel = ({
  skills,
  direction,
}: {
  skills: Skill[];
  direction: "left" | "right";
}) => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden fade-edges">
      <motion.div
        className={`flex gap-4 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ width: "fit-content" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} data-skill={skill.name} className="flex-shrink-0">
            <SkillBadge skill={skill} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto font-semibold">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <InfiniteCarousel skills={skillsRow1} direction="left" />
          <InfiniteCarousel skills={skillsRow2} direction="right" />
        </motion.div>
      </div>
    </section>
  );
};