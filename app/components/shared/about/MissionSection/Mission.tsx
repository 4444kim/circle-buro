import Image from "next/image";
import styles from "./Mission.module.scss";

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.missionInner}>
        <Image
          src="/about/mission.png"
          alt="Наша миссия"
          fill
          className={styles.bgImage}
        />
        <div className={styles.card}>
          <h2 className={styles.title}>наша миссия</h2>
          <p className={styles.description}>
            Создавать уникальные решения через командную работу и креативный
            подход, объединяя таланты и идеи для достижения выдающихся
            результатов. Мы верим, что сотрудничество вдохновляет, и вместе мы
            можем преодолеть любые границы, превращая смелые мысли в яркие и
            воздействующие проекты.
          </p>
        </div>
      </div>
    </section>
  );
}
