"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Project.module.scss";

const PROJECTS = [
  { name: "Stepe coffee", image: "/home/projects/project1.png" },
  { name: "Galeriya", image: "/home/projects/project2.png" },
  { name: "CAMPIT", image: "/home/projects/project3.png" },
  { name: "SANY", image: "/home/projects/project4.png" },
  { name: "DIVE", image: "/home/projects/project5.png" },
  { name: "Senen", image: "/home/projects/project6.png" },
  { name: "CITIX", image: "/home/projects/project7.png" },
  { name: "Home Bank", image: "/home/projects/project8.png" },
];

export default function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.title}>наши проекты</h2>

        {/* Desktop/Tablet Grid */}
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.name} className={styles.card}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className={styles.image}
              />
            </article>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className={styles.slider}>
          <button className={styles.arrowBtn} onClick={prevSlide} aria-label="Previous">
            <Image src="/calendar/Left 2.svg" alt="" width={24} height={24} />
          </button>

          <div className={styles.slideWrapper}>
            <article className={styles.slide}>
              <Image
                src={PROJECTS[currentSlide].image}
                alt={PROJECTS[currentSlide].name}
                fill
                className={styles.image}
              />
            </article>
          </div>

          <button className={styles.arrowBtn} onClick={nextSlide} aria-label="Next">
            <Image src="/calendar/Right 2.svg" alt="" width={24} height={24} />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
