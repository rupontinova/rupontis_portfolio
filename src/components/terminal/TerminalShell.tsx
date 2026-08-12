import { TerminalTitleBar } from "./TerminalTitleBar";
import { TerminalWorkspace } from "./TerminalWorkspace";
import styles from "./TerminalShell.module.css";

export function TerminalShell() {
  return (
    <main className={styles.shell} aria-label="Nova terminal portfolio">
      <div className={styles.window}>
        <TerminalTitleBar />
        <div className={styles.body}>
          <TerminalWorkspace />
        </div>
      </div>
    </main>
  );
}
