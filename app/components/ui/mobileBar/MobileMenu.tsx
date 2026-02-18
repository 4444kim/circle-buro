"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Select from "../select/Select";
import styles from "./MobileMenu.module.scss";

const NAV_LINKS = [
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О нас" },
  { href: "/projects", label: "Работы" },
  { href: "/show-cases", label: "Шоу кейсы" },
  { href: "/contact", label: "Контакты" },
];

const overlayTransition = { duration: 0.25, ease: "easeOut" as const };
const panelTransition = { duration: 0.35, ease: "easeOut" as const };
const staggerTransition = { staggerChildren: 0.05, delayChildren: 0.1 };

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 16 },
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            className={styles.menuOverlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
          />
          <motion.div
            key="panel"
            className={styles.menuModal}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{
              x: 0,
              transition: { ...panelTransition, when: "beforeChildren" },
            }}
            exit={{
              x: "100%",
              transition: { ...panelTransition, when: "afterChildren" },
            }}
          >
            <motion.div
              className={styles.menuTop}
              variants={{
                visible: { transition: staggerTransition },
                exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={itemVariants}>
                <Link href="/" onClick={onClose}>
                  <Image
                    src="/Logo.svg"
                    alt="CIRCLE creative buro"
                    width={40}
                    height={40}
                    className={styles.menuLogo}
                  />
                </Link>
              </motion.div>

              <motion.div className={styles.menuTopRight} variants={itemVariants}>
                <Select
                  options={[
                    { value: "ru", label: "РУС" },
                    { value: "kz", label: "КАЗ" },
                    { value: "en", label: "ENG" },
                    { value: "cn", label: "中文" },
                  ]}
                  defaultValue="ru"
                  variant="compact"
                  className={styles.menuLangSelect}
                  aria-label="Язык"
                />
                <button
                  type="button"
                  className={styles.menuCloseButton}
                  aria-label="Закрыть меню"
                  onClick={onClose}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>

            <motion.nav
              className={styles.menuNav}
              variants={{
                visible: { transition: staggerTransition },
                exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className={styles.menuNavList}>
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={styles.menuNavLink}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className={styles.menuBottom}
              variants={{
                visible: { transition: staggerTransition },
                exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className={styles.menuContactButton}
                >
                  Связаться с нами
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
