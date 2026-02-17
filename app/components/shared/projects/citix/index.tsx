import Image from "next/image";

import styles from "./citix.module.scss";

export default function CitixProject() {
  return (
    <div className={styles.citix}>
      {/* SECTION 1 – HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/projects-pages/citix/hero.png"
            alt="Citix hero"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className={styles.sectionsWrapper}>
        {/* SECTION 2 – текст слева, видео справа */}
        <section className={styles.section2}>
          <div className={styles.section2Text}>
            <span>Citix</span>
            <p>
              Circle работал с Citix в рамках разработки моушн-дизайна для
              маркетинговых и коммуникационных задач бренда. Проект был
              направлен на визуализацию ключевых идей и технологических решений
              компании через динамичные анимационные форматы.
            </p>
          </div>

          <div className={styles.section2video}>
            <video
              src="/projects-pages/citix/section1.mp4"
              playsInline
              muted
              loop
              autoPlay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </section>

        {/* SECTION 3 – видео слева, текст справа */}
        <section className={styles.section3}>
          <div className={styles.section3VideoWrap}>
            <video
              src="/projects-pages/citix/section2.mp4"
              playsInline
              muted
              loop
              autoPlay
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={styles.section3Text}>
            <p>
              В работе использовался современный визуальный язык, сочетающий
              графику, движение и ритм, соответствующие характеру бренда.
            </p>
            <p>
              Все анимационные решения создавались с учетом специфики аудитории
              и каналов коммуникации, чтобы визуальные материалы оставались
              понятными, выразительными и функциональными в маркетинговом
              контексте.
            </p>
          </div>
        </section>

        {/* SECTION 4 – итоги слева, видео справа */}
        <section className={styles.section4}>
          <div className={styles.section4Text}>
            <span>Итоги</span>
            <p>
              В результате Citix получил моушн-контент, который органично
              встроился в коммуникационную стратегию бренда и усилил визуальное
              представление его технологических решений.
            </p>
          </div>
          <div className={styles.section4VideoWrap}>
            <video
              src="/projects-pages/citix/section3.mp4"
              playsInline
              muted
              loop
              autoPlay
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
