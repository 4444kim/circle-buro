import Image from "next/image";

import InterierSlider from "@/app/components/shared/showCases/interier/interierBlocks/InterierSlider";
import styles from "./homeBank.module.scss";

export default function HomeBankProject() {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/projects-pages/homeBank/hero.png"
            alt="Home Bank hero"
            fill
            sizes="100vw"
            quality={85}
            priority
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className={styles.sectionsWrapper}>
        {/* SECTION 2 – изображение слева, текст справа */}
        <section className={styles.section2}>
          <div className={styles.section2ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section1.png"
              alt="Home Bank"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.section2Text}>
            <span>Home Bank</span>
            <p>
              Этот проект был выполнен как исследовательская и стратегическая
              диагностика бренда с целью понять, почему банк не формирует доверие
              и как можно изменить его восприятие через ребрендинг, пространство и
              цифровой опыт.
            </p>
          </div>
        </section>

        {/* SECTION 3 – два изображения */}
        <section className={styles.section3}>
          <div className={styles.section3ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section2_1.png"
              alt="Home Bank"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.section3ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section2_2.png"
              alt="Home Bank"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 4 – текст слева, изображение справа */}
        <section className={styles.section4}>
          <div className={styles.section4Text}>
            <p>
              В качестве основы проекта было выбрано потребительское
              исследование. В опросе приняли участие 110 респондентов из разных
              городов Казахстана. Анализ показал, что у 58% аудитории отсутствует
              сформированное восприятие бренда, а уровень доверия находится на
              критически низком уровне – около 9-12% по сравнению с лидерами
              рынка. При этом проблема заключалась не в активном недоверии, а в
              отсутствии четкого образа и опыта, который мог бы это доверие
              сформировать.
            </p>
          </div>
          <div className={styles.section4ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section3.png"
              alt="Home Bank исследование"
              width={700}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 5 – изображение слева, текст справа */}
        <section className={styles.section5}>
          <div className={styles.section5ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section4.png"
              alt="Home Bank"
              width={700}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.section5Text}>
            <p>
              Исследование поведения клиентов выявило ключевую закономерность.
              Депозиты оказались главным индикатором долгосрочных отношений с
              банком, а наличие доверия увеличивает вероятность выбора депозитов
              примерно в 30 раз. Также выяснилось, что несмотря на развитие
              онлайн-каналов, более 67% респондентов либо предпочитают отделения,
              либо готовы с ними взаимодействовать. Однако положительный опыт
              посещения отделений был зафиксирован менее чем у трети аудитории, за
              исключением группы с высоким уровнем доверия, где этот показатель
              достигал 78%.
            </p>
          </div>
        </section>

        {/* SECTION 6 – текст слева, изображение справа */}
        <section className={styles.section6}>
          <div className={styles.section6Text}>
            <p>
              На основе этих данных был сформирован стратегический вывод. Для
              изменения восприятия бренда недостаточно усиливать коммуникации или
              продвигать продукты. Ключевым фактором является опыт – физический и
              цифровой. Пространство отделений и интерфейс приложения напрямую
              влияют на уровень доверия и готовность клиентов к более сложным
              финансовым продуктам.
            </p>
          </div>
          <div className={styles.section6ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section5.png"
              alt="Home Bank"
              width={700}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 7 – изображение слева, текст справа */}
        <section className={styles.section7}>
          <div className={styles.section7ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section6.png"
              alt="Home Bank концепция"
              width={700}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.section7Text}>
            <p>
              В рамках проекта была предложена концепция эволюционного ребрендинга
              под именем HomeBank. Название и визуальная система опираются на
              ассоциации с безопасностью, стабильностью и понятностью. Цветовая
              палитра построена вокруг синего как базового маркера надёжности.
              Интерьер рассматривается как инструмент бренда: спокойная среда,
              понятная навигация и комфорт снижают напряжение и усиливают доверие
              на подсознательном уровне.
            </p>
          </div>
        </section>

        {/* SECTION 8 – текст слева, изображение справа */}
        <section className={styles.section8}>
          <div className={styles.section8Text}>
            <p>
              Отдельный блок диагностики был посвящен мобильному приложению.
              Анализ показал, что при стандартном функционале приложение не
              работает на формирование доверия и долгосрочных финансовых решений.
              В качестве стратегического направления были предложены улучшения UX
              и внедрение инструментов финансового планирования и обучения,
              которые усиливают позицию банка как партнера, а не просто сервиса
              для операций.
            </p>
          </div>
          <div className={styles.section8ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section7.png"
              alt="Home Bank приложение"
              width={700}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 9 – слайдер (InterierSlider) */}
        <section className={styles.section9}>
          <InterierSlider />
        </section>

        {/* SECTION 10 – два изображения */}
        <section className={styles.section10}>
          <div className={styles.section10ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section9_1.png"
              alt="Home Bank"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.section10ImgWrap}>
            <Image
              src="/projects-pages/homeBank/section9_2.png"
              alt="Home Bank"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>

        {/* SECTION 11 – итоги */}
        <section className={styles.section11}>
          <span>Итоги</span>
          <p>
            Структурированная диагностическая модель, показывающая, как через
            связку исследования, брендинга, интерьера и цифрового опыта можно
            изменить восприятие банка и создать основу для роста доверия и
            долгосрочной ценности клиента.
          </p>
        </section>
      </div>
    </>
  );
}
