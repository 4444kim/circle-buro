import Image from "next/image";

import styles from "./senen.module.scss";

export default function SenenProject() {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/projects-pages/senen/hero.png"
            alt="Senen hero"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className={styles.sectionsWrapper}>
        {/* SECTION 2 – текст слева, изображение справа */}
        <section className={styles.section2}>
          <div className={styles.section2Text}>
            <span>Senen</span>
            <p>
              Senen – компания, специализирующаяся на производстве корпоративных
              подарочных боксов и персонализированных подарочных решений для
              бизнеса. Circle подключился к проекту с задачей системно оформить
              визуальную часть продукта и сопутствующие материалы, которые
              используются в работе с корпоративными клиентами. Важно было
              сохранить характер бренда и одновременно сделать коммуникацию более
              понятной и структурированной.
            </p>
          </div>
          <div className={styles.section2ImgWrap}>
            <Image
              src="/projects-pages/senen/section1.png"
              alt="Senen подарочные боксы"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 3 – полноширинное изображение */}
        <section className={styles.section3}>
          <div className={styles.section3ImgWrap}>
            <Image
              src="/projects-pages/senen/section2.png"
              alt="Senen"
              width={1440}
              height={700}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 4 – текст по центру */}
        <section className={styles.section4}>
          <p>
            Следующим этапом стала разработка дизайна коммерческого предложения.
            Документ был выстроен так, чтобы четко и последовательно доносить
            ценность продукта, отражая стиль и позиционирование бренда.
          </p>
        </section>

        {/* SECTION 5 – изображение слева, текст справа */}
        <section className={styles.section5}>
          <div className={styles.section5ImgWrap}>
            <Image
              src="/projects-pages/senen/section3.png"
              alt="Senen упаковка"
              width={700}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.section5Text}>
            <p>
              Дополнительно Circle разработал визуальные решения для элементов
              упаковки. В проект вошли открытки, обертки, а также этикетки для
              чая и шоколада. Все элементы были выполнены в едином визуальном
              ключе и согласованы между собой, чтобы упаковка воспринималась как
              цельный продукт.
            </p>
          </div>
        </section>

        {/* SECTION 6 – полноширинное изображение */}
        <section className={styles.section6}>
          <div className={styles.section6ImgWrap}>
            <Image
              src="/projects-pages/senen/section4.png"
              alt="Senen"
              width={1440}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 7 – итоги */}
        <section className={styles.section7}>
          <span>Итоги</span>
          <p>
            В результате Senen получил структурированный набор визуальных и
            печатных материалов, усиливающих продукт и поддерживающих бренд на
            всех этапах взаимодействия с корпоративными клиентами.
          </p>
        </section>
      </div>
    </>
  );
}
