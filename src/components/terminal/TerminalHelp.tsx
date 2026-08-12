import styles from "./TerminalHelp.module.css";

export function TerminalHelp() {
  return (
    <div className={styles.help}>
      <p>Type any of the following commands to explore:</p>
      <p>
        [<span className={styles.cmd}>skills</span>] or [<span className={styles.cmd}>s</span>]
        {" "}-see what im skilled at
      </p>
      <p>
        [<span className={styles.cmd}>projects</span>] or [<span className={styles.cmd}>pj</span>]
        {" "}-discover my projects
      </p>
      <p>
        [<span className={styles.cmd}>about</span>] -all about me ;)
      </p>
      <p>
        [<span className={styles.cmd}>artworks</span>] -view my artworks
      </p>
      <p>
        [<span className={styles.cmd}>help</span>] -to guide you
      </p>
      <div className={styles.spacer} />
      <p>
        [<span className={styles.cmd}>clear</span>]
      </p>
      <div className={styles.spacer} />
      <p>Contact me:</p>
      <p>[<span className={styles.cmd}>github</span>]</p>
      <p>[<span className={styles.cmd}>linkedin</span>]</p>
      <p>[<span className={styles.cmd}>facebook</span>]</p>
      <p>[<span className={styles.cmd}>email</span>]</p>
      <p>[<span className={styles.cmd}>instagram</span>]</p>
    </div>
  );
}
