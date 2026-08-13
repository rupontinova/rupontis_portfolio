import type { IconType } from "react-icons";
import {
  SiApachejmeter,
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
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiSelenium,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { DiCss3Full, DiJava } from "react-icons/di";
import { TbBrandAdobe, TbDatabase, TbPalette } from "react-icons/tb";
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
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "Vercel", icon: SiVercel, color: "#EDEDED", level: 90, tileBg: "#000000", iconColor: "#FFFFFF" },
      { name: "Render", icon: SiRender, color: "#46E3B7", level: 75, tileBg: "#46E3B7", iconColor: "#FFFFFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFA000", level: 75, tileBg: "#FFA000", iconColor: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 75, tileBg: "#2496ED", iconColor: "#FFFFFF" },
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
      { name: "JUnit", icon: SiJunit5, color: "#25A162", level: 75, tileBg: "#25A162", iconColor: "#FFFFFF" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A", level: 80, tileBg: "#43B02A", iconColor: "#FFFFFF" },
      { name: "JMeter", icon: SiApachejmeter, color: "#D22128", level: 70, tileBg: "#D22128", iconColor: "#FFFFFF" },
    ],
  },
  {
    title: "Design & Writing",
    items: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 80, tileBg: "#FFFFFF", iconColor: "#F24E1E" },
      { name: "Adobe Suite", icon: TbBrandAdobe, color: "#FF0000", level: 80, tileBg: "#1A0000", iconColor: "#FF0000" },
      { name: "Canva", icon: TbPalette, color: "#00C4CC", level: 85, tileBg: "#001F1F", iconColor: "#00C4CC" },
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
