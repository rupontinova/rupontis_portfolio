"use client";

import { useState, type ReactNode } from "react";
import styles from "./TerminalAboutOutput.module.css";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

const TABS: Tab[] = [
  {
    id: "intro",
    label: "About me?",
    content: (
      <div className={styles.introGrid}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <span className={styles.windowDot} />
            <span className={styles.windowDot} />
            <span className={styles.windowDot} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rupontis_portfolio/me/clean_nova.png"
            alt="Ruponti Muin Nova"
            className={styles.windowPhoto}
          />
        </div>
        <div className={styles.introText}>
          <h2 className={styles.hiHeading}><strong>Hi! I&apos;m Nova</strong></h2>
          <p>
            I&apos;m a grad student at Bangladesh University of Professionals
            (BUP), pursuing MSc in Information and Communication Engineering.
            Creativity fuels me, whether it&apos;s sketching or solving bugs.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "funfact",
    label: "Fun Fact",
    content: (
      <>
        <h3 className={styles.panelTitle}>Fun Fact</h3>
        <p>
          INTJ. I hate em-dashes. I love /plan command. When I&apos;m not knee deep in code, you can find me either
          drawing or binge-watching animes! ;)
        </p>
        {/* <div className={styles.quote}>
          <span className={styles.quoteMark}>&ldquo;</span>
          <p className={styles.quoteText}>
            Oppurtunity is always dangling in front of you.
          </p>
        </div> */}
      </>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    content: (
      <>
        <h3 className={styles.panelTitle}>Experience</h3>
        <div className={styles.entry}>
          <p className={styles.entryHead}>
            Frontend Developer{" "}
            <span className={styles.entryOrg}>@ ATI Limited (04/2026 – 07/2026)</span>
          </p>
          <p className={styles.entryBody}>
            Worked on Creative Matter, a digital agency and Tilottoma, a Bangladeshi buidling materials brand using Next.js, React.js and modern frontend libraries,
            focusing on performance, responsiveness and user experience

          </p>
        </div>
      </>
    ),
  },
  {
    id: "leadership",
    label: "Earlier Leadership",
    content: (
      <>


        <h3 className={styles.panelTitle}>Earlier Leadership</h3>
        <p> Somehow ended up leading as much as I code.</p>
        <div className={styles.entry}>
          <p className={styles.entryHead}>
            General Secretary{" "}
            <span className={styles.entryOrg}>@ IEEE BUP Student Branch</span>
          </p>
          <p className={styles.entryBody}>
            Started as Sub-Executive (Design &amp; Creativity), grew into
            serving as a GS, organized IEEE BranchFest 2025 (events,
            graphics, branding, social media, inter-uni coordination) and
            kept the community buzzing online, off and on campus.
          </p>
        </div>

        <div className={styles.entry}>
          <p className={styles.entryHead}>
            General Secretary (Quiz){" "}
            <span className={styles.entryOrg}>@ SAGC Art &amp; Craft Club</span>
          </p>
          <p className={styles.entryBody}>
            Before code, there was color, organized the national
            event Flair Hunt 1.0, led the Graphics Team and stayed
            elbow deep in every poster and competition the club ran.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "publications-certifications",
    label: "Publications & Certifications",
    content: (
      <>
        <h3 className={styles.panelTitle}>Publications</h3>
        <ul className={styles.list}>
          <li>
            &ldquo;A Study of Machine Learning Models with Population and
            Swarm Based Optimization for Cardiovascular Disease
            Prediction&rdquo; — BUP FST Journal, Vol. 3, Issue 1, 2025.{" "}
            <a
              className={styles.link}
              href="https://doi.org/10.64494/JFST/v3i1/ss/2025/01/1-24"
              target="_blank"
              rel="noreferrer"
            >
              DOI
            </a>
          </li>
          <li>
            &ldquo;Context-Aware Multi-Language Defect Detection: LLM
            Diagnosis for Interpretable Competitive Programming
            Analysis&rdquo; — Manuscript submitted for publication, 2026.
          </li>
        </ul>
        <h3 className={styles.panelTitle} style={{ marginTop: "1rem" }}>
          Certifications
        </h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.datacamp.com/statement-of-accomplishment/track/4857032745befafc60b014aaee0f37b6fded8c1d?raw=1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Foundation
            </a>{" "}
            — DataCamp
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.datacamp.com/certificate/AIEDA0015450205391"
              target="_blank"
              rel="noreferrer"
            >
              AI Engineer for Developers Associate
            </a>{" "}
            — DataCamp
          </li>
          <li>
            <a
              className={styles.link}
              href="https://cs50.harvard.edu/certificates/1307f13b-6b23-4be5-ac21-a5710c4595ba"
              target="_blank"
              rel="noreferrer"
            >
              CS50: Introduction to Programming with Python
            </a>{" "}
            — Harvard University (2025)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "accomplishments",
    label: "Accomplishments",
    content: (
      <>
        <h3 className={styles.panelTitle}>Accomplishments</h3>
        <ul className={styles.list}>
          <li>
            <strong>Champion</strong> — AnimeCon Dhaka 2022 (Art Competition)
          </li>
          <li>
            <strong>Champion</strong> — SAGC 5th Science National Festival 2021 (Artwork)
          </li>
          <li>
            <strong>2nd Runner-up</strong> — AE Bangladesh Art Competition 2021, endorsed by the
            Japan–Bangladesh Friendship Relations 50th Anniversary of
            Establishment
          </li>
          <li>
            <strong>Champion</strong> — Virtual Art Venture 2021 (Art Competition)
          </li>
        </ul>
      </>
    ),
  },
];

export function TerminalAboutOutput() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <div className={styles.about}>
      <div className={styles.tabs} role="tablist" aria-label="About sections">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            className={
              tab.id === activeId
                ? `${styles.tab} ${styles.tabActive}`
                : styles.tab
            }
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
            <span className={styles.tabArrow} aria-hidden>
              →
            </span>
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        {active.content}
      </div>
    </div>
  );
}
