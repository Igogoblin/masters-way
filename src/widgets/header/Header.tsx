"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
interface HeaderProps {
  logo?: string;
  slogan: { en: string; ru: string };
  language: "en" | "ru";
  onLanguageToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  slogan,
  language,
  onLanguageToggle,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src="/logoSpace.PNG" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className={styles.slogan}>{slogan[language]}</div>
      <div className={styles.languageToggle}>
        <button onClick={onLanguageToggle}>
          {language === "en" ? "ru" : "en"}
        </button>
      </div>
    </header>
  );
};

export default Header;
