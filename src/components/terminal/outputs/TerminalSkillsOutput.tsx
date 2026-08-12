import type { IconType } from "react-icons";
import {
  SiApachejmeter,
  SiC,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJunit5,
  SiLatex,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiScrumalliance,
  SiSelenium,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { DiCss3Full, DiIllustrator, DiJava, DiPhotoshop } from "react-icons/di";
import { TbBinaryTree, TbBrain, TbBoxMultiple, TbDatabase, TbMathFunction, TbVector } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";
import styles from "./TerminalSkillsOutput.module.css";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  level: number;
  tileBg?: string;
  iconColor?: string;
};

const SKILL_GROUPS: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90, tileBg: "#F7DF1E", iconColor: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 90, tileBg: "#3178C6", iconColor: "#FFFFFF" },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 95, tileBg: "#306998", iconColor: "#FFD43B" },
      { name: "C", icon: SiC, color: "#A8B9CC", level: 80, tileBg: "#0B1F3A", iconColor: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: 80, tileBg: "#00599C", iconColor: "#FFFFFF" },
      { name: "Java", icon: DiJava, color: "#F89820", level: 85, tileBg: "#4B6C9E", iconColor: "#F89820" },
      { name: "PHP", icon: SiPhp, color: "#777BB4", level: 75, tileBg: "#777BB4", iconColor: "#FFFFFF" },
      { name: "SQL", icon: TbDatabase, color: "#4479A1", level: 85, tileBg: "#4479A1", iconColor: "#FFFFFF" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 90, tileBg: "#20232A", iconColor: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#EDEDED", level: 85, tileBg: "#000000", iconColor: "#FFFFFF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 90, tileBg: "#333333", iconColor: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#EDEDED", level: 90, tileBg: "#000000", iconColor: "#FFFFFF" },
      { name: "Flask", icon: SiFlask, color: "#000000", level: 75, tileBg: "#FFFFFF", iconColor: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", level: 90, tileBg: "#0F172A", iconColor: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 90, tileBg: "#E34F26", iconColor: "#FFFFFF" },
      { name: "CSS3", icon: DiCss3Full, color: "#1572B6", level: 90, tileBg: "#1572B6", iconColor: "#FFFFFF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85, tileBg: "#764ABC", iconColor: "#FFFFFF" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 90, tileBg: "#47A248", iconColor: "#FFFFFF" },
      { name: "MySQL", icon: SiMysql, color: "#5DADE2", level: 90, tileBg: "#00618A", iconColor: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 80, tileBg: "#336791", iconColor: "#FFFFFF" },
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "Vercel", icon: SiVercel, color: "#EDEDED", level: 90, tileBg: "#000000", iconColor: "#FFFFFF" },
      { name: "Render", icon: SiRender, color: "#46E3B7", level: 75, tileBg: "#46E3B7", iconColor: "#FFFFFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFA000", level: 75, tileBg: "#FFA000", iconColor: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 75, tileBg: "#2496ED", iconColor: "#FFFFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: 80, tileBg: "#00C7B7", iconColor: "#FFFFFF" },
    ],
  },
  {
    title: "Tools & Project Management",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032", level: 90, tileBg: "#F05032", iconColor: "#FFFFFF" },
      { name: "GitHub", icon: SiGithub, color: "#EDEDED", level: 90, tileBg: "#181717", iconColor: "#FFFFFF" },
      { name: "Jira", icon: SiJira, color: "#0052CC", level: 70, tileBg: "#0052CC", iconColor: "#FFFFFF" },
      { name: "Trello", icon: SiTrello, color: "#0079BF", level: 80, tileBg: "#0079BF", iconColor: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 85, tileBg: "#FF6C37", iconColor: "#FFFFFF" },
      { name: "npm", icon: SiNpm, color: "#CB3837", level: 80, tileBg: "#CB3837", iconColor: "#FFFFFF" },
      { name: "Agile Scrum", icon: SiScrumalliance, color: "#0DA5B5", level: 80, tileBg: "#0DA5B5", iconColor: "#FFFFFF" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162", level: 75, tileBg: "#25A162", iconColor: "#FFFFFF" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A", level: 80, tileBg: "#43B02A", iconColor: "#FFFFFF" },
      { name: "JMeter", icon: SiApachejmeter, color: "#D22128", level: 70, tileBg: "#D22128", iconColor: "#FFFFFF" },
    ],
  },
  {
    title: "CS Fundamentals",
    items: [
      { name: "Machine Learning", icon: TbBrain, color: "#8B5CF6", level: 90, tileBg: "#2E1065", iconColor: "#8B5CF6" },
      { name: "AI", icon: BsRobot, color: "#14B8A6", level: 95, tileBg: "#042F2E", iconColor: "#14B8A6" },
      { name: "Data Structures", icon: TbBinaryTree, color: "#F59E0B", level: 85, tileBg: "#451A03", iconColor: "#F59E0B" },
      { name: "Algorithms", icon: TbMathFunction, color: "#60A5FA", level: 85, tileBg: "#1E3A8A", iconColor: "#93C5FD" },
      { name: "OOP", icon: TbBoxMultiple, color: "#EC4899", level: 90, tileBg: "#500724", iconColor: "#EC4899" },
    ],
  },
  {
    title: "Design & Writing",
    items: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 80, tileBg: "#FFFFFF", iconColor: "#F24E1E" },
      { name: "Adobe XD", icon: TbVector, color: "#FF61F6", level: 70, tileBg: "#470137", iconColor: "#FF61F6" },
      { name: "Photoshop", icon: DiPhotoshop, color: "#31A8FF", level: 80, tileBg: "#001E36", iconColor: "#31A8FF" },
      { name: "Illustrator", icon: DiIllustrator, color: "#FF9A00", level: 80, tileBg: "#330000", iconColor: "#FF9A00" },
      { name: "LaTeX", icon: SiLatex, color: "#4FB3A9", level: 90, tileBg: "#123832", iconColor: "#4FB3A9" },
    ],
  },
];

export function TerminalSkillsOutput() {
  return (
    <div className={styles.skills}>
      {SKILL_GROUPS.map((group) => (
        <section key={group.title} className={styles.group}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <div className={styles.grid}>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isBrandTile = Boolean(item.tileBg);
              return (
                <div key={item.name} className={styles.card}>
                  <span
                    className={styles.tile}
                    style={isBrandTile ? { background: item.tileBg } : undefined}
                  >
                    <Icon
                      size={isBrandTile ? 44 : 28}
                      color={item.iconColor ?? item.color}
                    />
                  </span>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.barTrack} aria-hidden>
                    <span
                      className={styles.barFill}
                      style={{ width: `${item.level}%`, background: item.color }}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
