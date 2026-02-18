"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Benefits.module.scss";

const BENEFITS = [
  {
    title: "комплексный подход",
    description:
      "Полностью берем на себя маркетинг, чтобы вы сосредоточились на своем деле",
  },
  {
    title: "честность и надежность",
    description: "Не продаем иллюзии, даем честный результат",
  },
  {
    title: "отсутствие шаблонов",
    description:
      "Креативная команда которая создаёт уникальные идеи и использует тренды из разных сфер",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <Image
        src="/home/benefits.png"
        alt="Benefits background"
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
          ПОЧЕМУ МЫ?
        </motion.h2>

        <div className={styles.container}>
          {BENEFITS.map((benefit) => (
            <motion.article
              key={benefit.title}
              className={styles.card}
              variants={itemVariants}
            >
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardText}>{benefit.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
