import React, { ReactNode, RefObject } from "react";
import styles from "./HorizontalScrollContainer.module.css";
import {
  canScrollLeft,
  canScrollRight,
  scrollLeft,
  scrollRight,
  transformScroll,
} from "../../helpers/domPhysics";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IHorizontalScrollContainerProps {
  children?: ReactNode;
  className?: string;
  padderClassName?: string;
  style?: object;
  shouldTransformScroll?: boolean;
}

export default function HorizontalScrollContainer({
  children,
  className,
  style,
  padderClassName,
  shouldTransformScroll = false,
}: IHorizontalScrollContainerProps) {
  const leftButtonRef = useRef<HTMLButtonElement>();
  const containerRef = useRef<HTMLDivElement>();
  const rightButtonRef = useRef<HTMLButtonElement>();

  const [canGoLeft, setCanGoLeft] = useState(false);
  const [canGoRight, setCanGoRight] = useState(false);

  const handleScroll = (e: Event) => {
    setCanGoLeft(canScrollLeft(e.currentTarget as HTMLDivElement));
    setCanGoRight(canScrollRight(e.currentTarget as HTMLDivElement));
  };

  useEffect(() => {
    containerRef?.current?.addEventListener("scroll", handleScroll);

    if (shouldTransformScroll) {
      // Using the element's onWheel has glitches
      containerRef?.current?.addEventListener("wheel", transformScroll);
    }

    return () => {
      containerRef?.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (shouldTransformScroll) {
        containerRef?.current?.removeEventListener("wheel", transformScroll);
      }
    };
  }, []);

  const goLeft = () => {
    if (containerRef == null) return;

    scrollLeft(containerRef?.current as HTMLDivElement);
  };

  const goRight = () => {
    if (containerRef == null) return;

    scrollRight(containerRef?.current as HTMLDivElement);
  };

  return (
    <div style={style} className={`${className} ${styles.container}`}>
      <button
        ref={leftButtonRef as RefObject<HTMLButtonElement>}
        disabled={!canGoLeft}
        className={`${styles.left} ${styles.move}`}
        onClick={goLeft}
      >
        <FaChevronLeft className={styles.chevron} />
      </button>

      <div
        className={`${padderClassName} ${styles.padder}`}
        ref={containerRef as RefObject<HTMLDivElement>}
      >
        <div className={styles.overflowContainer}>{children}</div>
      </div>
      <button
        ref={rightButtonRef as RefObject<HTMLButtonElement>}
        disabled={!canGoRight}
        className={`${styles.right} ${styles.move}`}
        onClick={goRight}
      >
        <FaChevronRight className={styles.chevron} />
      </button>
    </div>
  );
}
