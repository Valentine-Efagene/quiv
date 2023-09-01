import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./SizeNotSupported.module.css";

export default function SizeNotSupported(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div {...props} className={`${styles.container} ${props.className}`}>
      <div className={styles.content}>
        <h1>This screen size is not supported</h1>
      </div>
    </div>
  );
}
