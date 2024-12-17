import css from "./styles.module.css";
import { motion } from "motion/react";
import { useState } from "react";

export default function Example() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className={css["wrapper"]}>
      <motion.button
        layout
        className={css["button"]}
        style={{ color: "black" }}
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </motion.button>
      {showSecond ? (
        <motion.div id="1" layout layoutId="1" className={css["second-element"]} />
      ) : (
        <motion.div
          id="2"
          layout
          layoutId="2"
          className={css["element"]}
          style={{ borderRadius: "12px" }}
        />
      )}
    </div>
  );
}
