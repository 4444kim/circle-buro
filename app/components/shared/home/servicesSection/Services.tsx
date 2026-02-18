"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Services.module.scss";
import Link from "next/link";

const SERVICES = [
  {
    title: "МОУШН",
    description:
      "направление дизайна, специализирующееся на создании анимированных динамических изображений",
  },
  {
    title: "ВЕБ-РАЗРАБОТКА",
    description: "создание и техническая поддержка сайта",
  },
  {
    title: "SMM",
    description:
      "создание уникального контента и продвижение в социальных сетях",
  },
  {
    title: "МАРКЕТИНГ",
    description:
      "изучения рыночных тенденций, разработка стратегии продвижения и каналов траффика",
  },
  {
    title: "ГРАФИЧЕСКИЙ ДИЗАЙН",
    description: "создание визуальной коммуникации бренда с потребителями",
  },
  {
    title: "ИНТЕРЬЕРНЫЙ ДИЗАЙН",
    description:
      "создание среды, которая усиливает бренд и формирует клиентский опыт",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <Image
        src="/home/services.png"
        alt="Services background"
        fill
        sizes="100vw"
        quality={80}
        className={styles.bgImage}
      />

      <motion.div
        className={styles.inner}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          наши услуги
        </motion.h2>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              className={styles.card}
              variants={itemVariants}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Link href="/services" className={styles.btn}>
            ПОДРОБНЕЕ <span className={styles.arrow}>→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
