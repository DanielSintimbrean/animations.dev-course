import css from "./button-spinner.module.css"
import { CSSProperties } from "react";

const bars = Array(12).fill(0);

export function Spinner({
  color,
  size = 20,
}: {
  color: string;
  size?: number;
}) {
  return (
    <div
      className={css["wrapper"]}
      style={{
        ["--spinner-size"]: `${size}px`,
        ["--spinner-color"]: color,
      } as CSSProperties}
    >
      <div className={css["spinner"]}>
        {bars.map((_, i) => (
          <div className={css["bar"]} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
