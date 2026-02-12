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
        <section className={`${styles.section}`}>
          <div className={styles.sectionInner}>
            <div className={styles.textWrapper}>
              <span className={styles.title}>Steppe Coffee</span>
              <p className={styles.description}>
                Steppe Coffee – городской кофейный проект с сильным
                комьюнити-потенциалом и фокусом на живое общение. В рамках
                первого этапа мы пересобрали визуальный язык бренда, усилили
                характер и атмосферу Steppe Coffee, а также заложили единую ```
                логику для дальнейшего развития контента и коммуникаций. Это
                позволило бренду выглядеть цельно и узнаваемо во всех точках
                контакта с аудиторией.
              </p>
            </div>
            <div className={styles.videoWrapper}>
              <video
                src="/projects-pages/steppe-coffee/section2.mp4"
                autoPlay
                muted
                loop
                className={styles.video}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section}`}>
          <div className={styles.sectionInner3}>
            <div className={styles.imageWrapper}>
              <Image
                src="/projects-pages/steppe-coffee/section3.png"
                alt=""
                width={680}
                height={550}
                className={styles.image2}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/projects-pages/steppe-coffee/section3-second.png"
                alt=""
                width={680}
                height={550}
                className={styles.image2}
              />
            </div>
          </div>
        </section>

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
