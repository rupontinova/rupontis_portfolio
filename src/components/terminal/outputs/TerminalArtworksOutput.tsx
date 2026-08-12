import styles from "./TerminalOutputBlocks.module.css";

export function TerminalArtworksOutput() {
  return (
    <div className={styles.block}>
      <p>
        Artwork gallery is loading from the legacy portfolio — add images to{" "}
        <code>public/images/</code> to enable the full grid.
      </p>
      <p>There&apos;s more on the way! Keep an eye out.</p>
      <p>© All rights reserved — request permission before use.</p>
    </div>
  );
}
