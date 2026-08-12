import { PROJECTS } from "../terminal-commands";
import styles from "./TerminalProjectsOutput.module.css";

export function TerminalProjectsOutput() {
  return (
    <div className={styles.projects}>
      {PROJECTS.map((project) =>
        project.githubHref ? (
          <article key={project.href} className={styles.card}>
            <div className={styles.link}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.tech}>
                <code>Technology: {project.tech}</code>
              </p>
              <p className={styles.dualLinks}>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
                {" | "}
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </article>
        ) : (
          <article key={project.href} className={styles.card}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.tech}>
                <code>Technology: {project.tech}</code>
              </p>
            </a>
          </article>
        ),
      )}
    </div>
  );
}
