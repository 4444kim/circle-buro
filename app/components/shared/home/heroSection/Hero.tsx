import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <Image
          src="/home/hero-main.png"
          alt="CIRCLE — визуальный герой"
          fill
          className={styles.heroImage}
          priority
        />
      </div>
    </section>
  );
}
