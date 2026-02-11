"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Project.module.scss";

const PROJECTS = [
  {
    name: "Stepe coffee",
    label: "Stepe coffee",
    src: "/projects-video/project1.mp4",
    isVideo: true,
  },
  {
    name: "Galeriya",
    label: "Galeriya",
    src: "/projects-video/project2.mp4",
    isVideo: true,
  },
  {
    name: "CAMPIT",
    label: "CAMPIT",
    src: "/projects-video/project3.mp4",
    isVideo: true,
  },
  {
    name: "SANY",
    label: "SANY",
    src: "/projects-video/project4.png",
    isVideo: false,
  },
  {
    name: "DIVE",
    label: "DIVE",
    src: "/projects-video/project5.mp4",
    isVideo: true,
  },
  {
    name: "Senen",
    label: "Senen",
    src: "/projects-video/project6.png",
    isVideo: false,
  },
  {
    name: "CITIX",
    label: "CITIX",
    src: "/projects-video/project7.mp4",
    isVideo: true,
  },
  {
    name: "Home Bank",
    label: "Home Bank",
    src: "/projects-video/project8.mp4",
    isVideo: true,
  },
];

export default function ProjectSection() {
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
        
        

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.name} className={styles.card}>
              <div className={styles.cardMedia}>
                {project.isVideo ? (
                  <video
                    className={styles.cardMediaContent}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={project.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.src}
                    alt={project.name}
                    fill
                    className={styles.cardMediaContent}
                  />
                )}

                <div className={styles.cardOverlay}>
                  <div className={styles.cardHeader}>
                    <button className={styles.cardTag}>{project.label}</button>
                    <button
                      type="button"
                      className={styles.cardIconBtn}
                      aria-label={`Перейти к проекту ${project.name}`}
                    >
                      <Image
                        src="/projects-video/icons/arrow-up-right-video.svg"
                        alt=""
                        width={8}
                        height={8}
                      />
                    </button>
                  </div>

                  <div className={styles.cardFooter}>
                    <button type="button" className={styles.nextButton}>
                      <span>Next</span>
                      <Image
                        src="/projects-video/icons/arrow-right-video.svg"
                        alt=""
                        width={16}
                        height={16}
                        className={styles.nextIcon}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.slider}>
          <button
            className={styles.arrowBtn}
            onClick={prevSlide}
            aria-label="Previous"
          >
            <Image src="/calendar/Left 2.svg" alt="" width={24} height={24} />
          </button>

          <div className={styles.slideWrapper}>
            <article className={styles.slide}>
              {PROJECTS[currentSlide].isVideo ? (
                <video
                  className={styles.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={PROJECTS[currentSlide].src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={PROJECTS[currentSlide].src}
                  alt={PROJECTS[currentSlide].name}
                  fill
                  className={styles.image}
                />
              )}
            </article>
          </div>

          <button
            className={styles.arrowBtn}
            onClick={nextSlide}
            aria-label="Next"
          >
            <Image src="/calendar/Right 2.svg" alt="" width={24} height={24} />
          </button>
        </div>

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
