import css from "./animate-height.module.css";
import { motion } from "motion/react";
import { useState } from "react";
import useMeasure from "react-use-measure";

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);

  const [ref, bounds] = useMeasure();

  return (
    <div className={css["wrapper"]}>
      <button
        style={{
          color: "black",
        }}
        className={css["button"]}
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </button>
      <motion.div animate={{ height: bounds.height }} className={css["element"]}>
        <div ref={ref} className={css["inner"]}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
