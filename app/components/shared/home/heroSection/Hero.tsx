import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <video
          src="/home/hero-main-video.mp4"
          className={styles.heroImage}
          autoPlay
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
