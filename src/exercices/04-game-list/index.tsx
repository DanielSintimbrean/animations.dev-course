import css from "./game-list.module.css";

import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "motion/react";

export default function SharedLayout() {
  const [activeGame, setActiveGame] = useState<(typeof GAMES)[0] | null>(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={css["overlay"]}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
            <div className={css["active-game"]}>
              <motion.div
                layout
                layoutId={`card-${activeGame.title}`}
                className={css["inner"]}
                ref={ref}
                style={{ borderRadius: 12 }}
              >
                <div className={css["header"]}>
                  <motion.img
                    layoutId={`image-${activeGame.title}`}
                    height={56}
                    width={56}
                    alt="Game"
                    src={activeGame.image}
                    style={{ borderRadius: 12 }}
                  />
                  <div className={css["header-inner"]}>
                    <div className={css["content-wrapper"]}>
                      <motion.h2 layoutId={`title-${activeGame.title}`}  className={css["game-title"]}>{activeGame.title}</motion.h2>
                      <motion.p layoutId={`description-${activeGame.title}`} className={css["game-description"]}>
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.button layoutId={`button-${activeGame.title}`} className={css["button"]}>Get</motion.button>
                  </div>
                </div>
                <p className={css["long-description"]}>
                  {activeGame.longDescription}
                </p>
              </motion.div>
            </div>
        ) : null}
      </AnimatePresence>
      <ul className={css["list"]}>
        {GAMES.map((game) => (
          <motion.li
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
          >
            <motion.img
              layoutId={`image-${game.title}`}
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className={css["game-wrapper"]}>
              <div className={css["content-wrapper"]}>
                <motion.h2 layoutId={`title-${game.title}`} className={css["game-title"]}>{game.title}</motion.h2>
                <motion.p layoutId={`description-${game.title}`} className={css["game-description"]}>{game.description}</motion.p>
              </div>
              <motion.button layoutId={`button-${game.title}`} className={css["button"]}>Get</motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
