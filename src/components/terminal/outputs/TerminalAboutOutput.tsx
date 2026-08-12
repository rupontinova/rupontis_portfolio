import styles from "./TerminalOutputBlocks.module.css";

export function TerminalAboutOutput() {
  return (
    <div className={styles.block}>
      <p>
        Hello! I&apos;m <strong>Ruponti Muin Nova</strong> — undergrad at{" "}
        <strong>Bangladesh University of Professionals</strong>, studying{" "}
        <strong>Information and Communication Engineering</strong>.
      </p>
      <p>
        <strong>FrontEnd:</strong> JavaScript, HTML, CSS, TypeScript, React,
        Redux, Tailwind, Next.js
      </p>
      <p>
        <strong>BackEnd:</strong> Node, Python, PHP, Express, Flask, MySQL,
        MongoDB
      </p>
      <p>
        When I&apos;m not coding: drawing or binge-watching anime.
      </p>
    </div>
  );
}
