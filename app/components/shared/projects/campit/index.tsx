import Image from "next/image";

import styles from "./steppe-coffe.module.scss";

export default function SteppeCoffeeProject() {
  return (
    <main className={styles.steppeCoffeePage}>
      {/* SECTION 1 – HERO */}
      <section className={`${styles.section}`}>
        <div className={styles.heroInner}>
          <Image
            src="/projects-pages/steppe-coffee/hero.png"
            alt="Steppe Coffee hero"
            fill
            className={styles.sectionBg}
            priority
          />
        </div>
      </section>

      <div className={styles.sectionsWrapper}>
        {/* <section className={`${styles.section} ${styles.section2}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section3}`}>
        <Image
          src="/project-pages/steppe-cofee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section4}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section5}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section6}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section7}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section8}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section9}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section10}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section11}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section12}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}

        {/* <section className={`${styles.section} ${styles.section13}`}>
        <Image
          src="/projects-pages/steppe-coffee/bg-sections.png"
          alt=""
          fill
          className={styles.sectionBg}
        />
      </section> */}
      </div>
    </main>
  );
}
