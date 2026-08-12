import "@/styles/nintendoid.css";
import styles from "./TerminalIntro.module.css";

export function TerminalIntro() {
  return (
    <section className={styles.intro} aria-label="Introduction">
      <p className={`retroIntro retroIntroGreeting ${styles.greeting}`}>
        HELLO WORLD, I&apos;M
      </p>
      <h1 className={`retroIntro retroIntroName ${styles.name}`}>
        RUPONTI MUIN NOVA
      </h1>
      <p className={styles.welcome}>
        Welcome to my personal website!<span className={styles.cursor} aria-hidden />
      </p>
    </section>
  );
}
