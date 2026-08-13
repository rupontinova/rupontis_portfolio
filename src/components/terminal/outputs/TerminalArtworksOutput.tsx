import { FocusCards } from "@/components/ui/focus-cards";
import styles from "./TerminalOutputBlocks.module.css";

const ARTWORKS = [
  { src: "/works/obito.jpg", title: "Obito Uchiha", subtitle: "You either die a hero or live long enough to see yourself become the villain." },
  { src: "/works/naruto.jpg", title: "Naruto Uzumaki", subtitle: "I'm going to be Hokage one day!" },
  { src: "/works/deidara.jpg", title: "Deidara", subtitle: "Art is an explosion!" },
  { src: "/works/madara.jpg", title: "Madara Uchiha", subtitle: "Wake up to reality!" },
  { src: "/works/shin.jpg", title: "Shin", subtitle: "A killer with a curious heart." },
  { src: "/works/howl.jpg", title: "Wizard Howl", subtitle: "I want to see the world. I want to be free." },
  { src: "/works/aki.jpg", title: "Aki Hayakawa", subtitle: "Kon!" },
  { src: "/works/askeladd.jpg", title: "Askeladd", subtitle: "Everybody is a slave to something." },
  { src: "/works/death_note.jpg", title: "Death Note", subtitle: "Liars are the worst kind of monsters." },
  { src: "/works/eren_2.jpg", title: "Eren Yeager I", subtitle: "Tatakae!" },
  { src: "/works/eren.jpg", title: "Eren Yeager II", subtitle: "Tatakae!" },
  { src: "/works/ergo.jpg", title: "Ergo Proxy", subtitle: "The more you try to control life, the more it slips away." },
  { src: "/works/griffith.jpg", title: "Griffith", subtitle: "Everything I do, I do for my dream." },
  { src: "/works/johan_2.jpg", title: "Johan Liebert", subtitle: "The only thing all humans are equal in... is death." },
  { src: "/works/sukuna.jpg", title: "Ryomen Sukuna", subtitle: "😈" },
  { src: "/works/kakashi.jpg", title: "Hatake Kakashi", subtitle: "I will protect you." },
  { src: "/works/kuro.jpg", title: "Tetsurō Kuroo", subtitle: "ฅ^•⩊•^ฅ" },
  { src: "/works/levi.jpg", title: "Levi Ackerman", subtitle: "I'll do it my way." },
  { src: "/works/miya.jpg", title: "Miya Atsumu", subtitle: "Little goody-two-shoes." },
  { src: "/works/nanami.jpg", title: "Kento Nanami", subtitle: "Nanamin Nanamin!" },
  { src: "/works/sasuke.jpg", title: "Sasuke Uchiha", subtitle: "Imu boi Sasuke." },
  { src: "/works/toji.jpg", title: "Toji Fushiguro", subtitle: "dad (ꈍᴗꈍ)♡" },
];

export function TerminalArtworksOutput() {
  return (
    <div className={styles.block}>
      <p>Welcome to my art journal.</p>
      <FocusCards cards={ARTWORKS} />
      <p>© All rights reserved. Request permission before use.</p>
    </div>
  );
}
