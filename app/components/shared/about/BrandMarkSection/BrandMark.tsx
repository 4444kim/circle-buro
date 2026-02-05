import styles from "./BrandMark.module.scss";
import Image from "next/image";

export default function BrandMark() {
  return (
    <section className={styles.brandMark}>
      <Image
        src="/about/brand-mark.png"
        alt="BrandMark background"
        fill
        className={styles.bgImage}
      />
    </section>
  );
}
