"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Manifest.module.scss";

export default function Manifest() {
  return (
    <section className={styles.manifest}>
      <div className={styles.manifestInner}>
        <Image
          src="/home/manifest.png"
          alt="Manifest background"
          fill
          sizes="100vw"
          quality={85}
          priority
          className={styles.bgImage}
        />

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className={styles.title}>
            <span className={styles.brand}>CIRCLE</span> - это про людей.
            <br />
            людей, которые умеют создавать.
            <br />
            чувствовать. видеть дальше.
          </h2>

          <p className={styles.subtitle}>
            Креативное агентство полного цикла, где маркетинг, дизайн раскрывает
            креативный <br /> и концептуальный потенциал брендов, замыкая его в
            непрерывный круг..
          </p>
        </motion.div>
      </div>
    </section>
  );
}
