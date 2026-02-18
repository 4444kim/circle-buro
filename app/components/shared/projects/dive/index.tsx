import Image from "next/image";

import ChartDive from "@/app/components/ui/chart-dive/ChartDive";
import styles from "./dive.module.scss";

const SECTION3_PHOTOS = [
  { src: "/projects-pages/dive/section2/slide1.png", alt: "Dive — фото 1" },
  { src: "/projects-pages/dive/section2/slide2.png", alt: "Dive — фото 2" },
  { src: "/projects-pages/dive/section2/slide3.png", alt: "Dive — фото 3" },
  { src: "/projects-pages/dive/section2/slide4.png", alt: "Dive — фото 4" },
];

export default function DiveProject() {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/projects-pages/dive/hero.png"
            alt="Dive hero"
            fill
            sizes="100vw"
            quality={80}
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className={styles.sectionsWrapper}>
        {/* SECTION 2 – текст слева, видео справа */}
        <section className={styles.section2}>
          <div className={styles.section2Text}>
            <div className={styles.section2TextBlock}>
              <span>Dive</span>
              <p>
                Dive – бренд кассетных бескассетных жалюзи, для которого мы
                выстраивали присутствие в социальных сетях с нуля. Проект
                стартовал в конце декабря, и ключевая задача на первом этапе
                заключалась в запуске аккаунта, формировании базовой аудитории и
                тестировании спроса через контент и рекламу.
              </p>
            </div>
            <p className={styles.section2TextBlock2}>
              Мы сразу сделали ставку на простую и понятную подачу: объяснение
              продукта, живые лица, короткие форматы и фокус на пользе для
              клиента. Это позволило начать набор просмотров и первых
              подписчиков без долгого подготовительного этапа.
            </p>
          </div>
          <div className={styles.section2VideoWrap}>
            <video
              src="/projects-pages/dive/section1.mp4"
              playsInline
              muted
              loop
              autoPlay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </section>

        {/* SECTION 3 – контейнер с 4 фото (3 полностью + 4-е на 10%) */}
        <section className={styles.section3}>
          <div className={styles.photosContainer}>
            {SECTION3_PHOTOS.map((photo, index) => (
              <div key={index} className={styles.photo}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 – изображение слева, текст справа */}
        <section className={styles.section4}>
          <div className={styles.section4ImgWrap}>
            <video
              src="/projects-pages/dive/secction2.mp4"
              playsInline
              muted
              loop
              autoPlay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.section4Text}>
            <p>
              Параллельно был выстроен сам фундамент аккаунта. Мы разработали
              единую визуальную стилистику, оформили шапку профиля,
              скорректировали название аккаунта под задачи продвижения и создали
              хайлайты, которые закрывали основные вопросы клиента: ассортимент,
              установка, причины выбрать бренд. В результате профиль стал
              выглядеть как полноценный цифровой каталог и точка продаж.
            </p>
            <p>
              В процессе работы мы выстроили регулярный контент и планирование
              публикаций. Контент сочетал образовательные видео, презентацию
              продукта и простые объяснения процесса заказа и установки. Это
              позволило охватывать не только подписчиков, но и холодную
              аудиторию, которая ранее не была знакома с брендом. Дополнительно
              была запущена таргетированная реклама. Она дала не только рост
              показателей, но и прямой отклик в виде входящих запросов и
              подписок из рекламных объявлений.
            </p>
          </div>
        </section>

        {/* SECTION 5 – текст + чарт */}
        <section className={styles.section5}>
          <div className={styles.section5Text}>
            <p>
              К моменту завершения этапа работ аккаунт показал измеримый
              результат. За последние 30 дней профиль набрал 12 029 просмотров,
              при этом около 89% аудитории составили непoдписчики, что говорит о
              сильной работе на охват. Охваченные аккаунты превысили 5 600, а
              основная доля просмотров пришлась именно на Reels, что подтвердило
              корректность выбранной контент-стратегии .
            </p>
          </div>
          <div className={styles.section5Chart}>
            <ChartDive
              title="Просмотры"
              period="28 ноя - 27 дек"
              total={12029}
              adsPercent={56.4}
              subscribersPercent={11.2}
              labelNonSubscribers="Неподписчики"
              percentNonSubscribers={88.8}
              labelSubscribers="Подписчики"
              percentSubscribers={11.2}
              reelsPercent={60.8}
              storiesPercent={39.2}
              reached={5622}
              reachedChange={594.1}
              interactions={170}
            />
          </div>
        </section>

        {/* SECTION 6 – полноширинное изображение */}
        <section className={styles.section6}>
          <div className={styles.section6ImgWrap}>
            <Image
              src="/projects-pages/dive/section3.png"
              alt="Dive"
              width={1200}
              height={675}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 7 – итоги */}
        <section className={styles.section7}>
          <span>Итоги</span>
          <p>
            Итог проекта Dive: За короткий срок был создан упакованный аккаунт,
            выстроена логика контента, протестированы форматы и получены первые
            подтверждения спроса через охваты, просмотры и рекламные отклики.
            Проект заложил основу для дальнейшего масштабирования и превращения
            соцсетей в стабильный канал лидогенерации.
          </p>
        </section>
      </div>
    </>
  );
}
