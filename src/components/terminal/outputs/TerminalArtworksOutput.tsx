import { FocusCards } from "@/components/ui/focus-cards";
import styles from "./TerminalOutputBlocks.module.css";

const ARTWORKS = [
  { src: "/rupontis_portfolio/works/obito.jpg", title: "Obito Uchiha", subtitle: "You either die a hero or live long enough to see yourself become the villain." },
  { src: "/rupontis_portfolio/works/naruto.jpg", title: "Naruto Uzumaki", subtitle: "I'm going to be Hokage one day!" },
  { src: "/rupontis_portfolio/works/deidara.jpg", title: "Deidara", subtitle: "Art is an explosion!" },
  { src: "/rupontis_portfolio/works/madara.jpg", title: "Madara Uchiha", subtitle: "Wake up to reality!" },
  { src: "/rupontis_portfolio/works/shin.jpg", title: "Shin", subtitle: "A killer with a curious heart." },
  { src: "/rupontis_portfolio/works/howl.jpg", title: "Wizard Howl", subtitle: "I want to see the world. I want to be free." },
  { src: "/rupontis_portfolio/works/aki.jpg", title: "Aki Hayakawa", subtitle: "Kon!" },
  { src: "/rupontis_portfolio/works/askeladd.jpg", title: "Askeladd", subtitle: "Everybody is a slave to something." },
  { src: "/rupontis_portfolio/works/death_note.jpg", title: "Death Note", subtitle: "Liars are the worst kind of monsters." },
  { src: "/rupontis_portfolio/works/eren_2.jpg", title: "Eren Yeager I", subtitle: "Tatakae!" },
  { src: "/rupontis_portfolio/works/eren.jpg", title: "Eren Yeager II", subtitle: "Tatakae!" },
  { src: "/rupontis_portfolio/works/ergo.jpg", title: "Ergo Proxy", subtitle: "The more you try to control life, the more it slips away." },
  { src: "/rupontis_portfolio/works/griffith.jpg", title: "Griffith", subtitle: "Everything I do, I do for my dream." },
  { src: "/rupontis_portfolio/works/johan_2.jpg", title: "Johan Liebert", subtitle: "The only thing all humans are equal in... is death." },
  { src: "/rupontis_portfolio/works/sukuna.jpg", title: "Ryomen Sukuna", subtitle: "😈" },
  { src: "/rupontis_portfolio/works/kakashi.jpg", title: "Hatake Kakashi", subtitle: "I will protect you." },
  { src: "/rupontis_portfolio/works/kuro.jpg", title: "Tetsurō Kuroo", subtitle: "ฅ^•⩊•^ฅ" },
  { src: "/rupontis_portfolio/works/levi.jpg", title: "Levi Ackerman", subtitle: "I'll do it my way." },
  { src: "/rupontis_portfolio/works/miya.jpg", title: "Miya Atsumu", subtitle: "Little goody-two-shoes." },
  { src: "/rupontis_portfolio/works/nanami.jpg", title: "Kento Nanami", subtitle: "Nanamin Nanamin!" },
  { src: "/rupontis_portfolio/works/sasuke.jpg", title: "Sasuke Uchiha", subtitle: "Imu boi Sasuke." },
  { src: "/rupontis_portfolio/works/toji.jpg", title: "Toji Fushiguro", subtitle: "dad (ꈍᴗꈍ)♡" },
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
