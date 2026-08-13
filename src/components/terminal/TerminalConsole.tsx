"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { TerminalHelp } from "./TerminalHelp";
import { TerminalIntro } from "./TerminalIntro";
import {
  COMMAND_SUGGESTIONS,
  resolveCommand,
  type CommandResult,
} from "./terminal-commands";
import { TerminalAboutOutput } from "./outputs/TerminalAboutOutput";
import { TerminalArtworksOutput } from "./outputs/TerminalArtworksOutput";
import { TerminalProjectsOutput } from "./outputs/TerminalProjectsOutput";
import { TerminalSkillsOutput } from "./outputs/TerminalSkillsOutput";
import styles from "./TerminalConsole.module.css";

type HistoryEntry = {
  id: string;
  command: string;
  output: ReactNode | null;
};

function renderResult(result: CommandResult): ReactNode | null {
  switch (result.type) {
    case "none":
      return null;
    case "help":
      return <TerminalHelp />;
    case "skills":
      return <TerminalSkillsOutput />;
    case "projects":
      return <TerminalProjectsOutput />;
    case "about":
      return <TerminalAboutOutput />;
    case "artworks":
      return <TerminalArtworksOutput />;
    case "not-found":
      return <p className={styles.notFound}>Not found</p>;
    case "link":
      return null;
    case "clear":
      return null;
    default:
      return null;
  }
}

export function TerminalConsole() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const beepBufferRef = useRef<AudioBuffer | null>(null);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

  useEffect(() => {
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;
    fetch("/sound/radio-beeppo.mp3")
      .then((res) => res.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data))
      .then((buffer) => {
        beepBufferRef.current = buffer;
      })
      .catch(() => {});
    return () => {
      ctx.close();
    };
  }, []);

  const playBeep = useCallback(() => {
    const ctx = audioCtxRef.current;
    const buffer = beepBufferRef.current;
    if (!ctx || !buffer) return;
    if (ctx.state === "suspended") void ctx.resume();
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  }, []);

  const scrollToLatest = useCallback(() => {
    outputRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    scrollToLatest();
  }, [history, scrollToLatest]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runCommand = useCallback((raw: string) => {
    const command = raw.trim();
    if (!command) {
      return;
    }

    const result = resolveCommand(command);

    if (result.type === "clear") {
      setHistory([]);
      return;
    }

    if (result.type === "link") {
      window.open(result.href, "_blank", "noopener,noreferrer");
    }

    const output = renderResult(result);

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${prev.length}`,
        command,
        output,
      },
    ]);
  }, []);

  const handleSubmit = () => {
    runCommand(value);
    setValue("");
    setSuggestions([]);
    setSelectedSuggestion(-1);
  };

  const updateSuggestions = (next: string) => {
    const trimmed = next.trim();
    if (!trimmed) {
      setSuggestions([]);
      setSelectedSuggestion(-1);
      return;
    }
    setSuggestions(
      COMMAND_SUGGESTIONS.filter((item) => item.startsWith(trimmed.toLowerCase())),
    );
    setSelectedSuggestion(-1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestion((i) => {
          const next = Math.max(0, i - 1);
          if (next !== i) playBeep();
          return next;
        });
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestion((i) => {
          const next = Math.min(suggestions.length - 1, i + 1);
          if (next !== i) playBeep();
          return next;
        });
      }
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (selectedSuggestion >= 0 && suggestions[selectedSuggestion]) {
        runCommand(suggestions[selectedSuggestion]);
        setValue("");
        setSuggestions([]);
        setSelectedSuggestion(-1);
        return;
      }
      handleSubmit();
    }
  };

  const hasSuggestionMatch = suggestions.length > 0 && value.trim().length > 0;

  return (
    <section className={styles.console} aria-label="Terminal commands">
      <div className={styles.sticky}>
        <TerminalIntro />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/me/clean.png"
          alt=""
          aria-hidden="true"
          className={styles.avatar}
        />
        <TerminalHelp />
      </div>

      <div ref={outputRef} className={styles.output}>
        {history.map((entry) => (
          <div key={entry.id} className={styles.entry}>
            <div className={styles.commandLine}>
              <span className={styles.user}>nova@profile</span>
              <span className={styles.path}>:~$</span> {entry.command}
            </div>
            {entry.output && (
              <div className={styles.entryOutput}>{entry.output}</div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.inputRow}>
        <label htmlFor={inputId} className={styles.prompt}>
          <span className={styles.user}>nova@profile</span>
          <span className={styles.path}>:~$</span>
        </label>
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          className={`${styles.input} ${hasSuggestionMatch ? styles.inputActive : ""}`}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            updateSuggestions(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command input"
        />
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestions} role="listbox">
          {suggestions.map((item, index) => (
            <button
              key={item}
              type="button"
              role="option"
              className={
                index === selectedSuggestion ? styles.suggestionSelected : styles.suggestion
              }
              onMouseDown={(event) => {
                event.preventDefault();
                setValue(item);
                setSuggestions([]);
                setSelectedSuggestion(-1);
                inputRef.current?.focus();
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
