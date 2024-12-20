import React from "react";
import Image from "next/image";
import styles from "./NavigationCard.module.css";
import Label from "@/stories/Label";
import Link from "next/link";

export interface NavigationCardProps {
  image: string;
  label: string;
  path: string;
  language: "en" | "ru";
  onClick?: () => void;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  image,
  label,
  path,
}) => {
  return (
    <div className={styles.card}>
      <Link href={path} className={styles.link}>
        <Image src={image} alt={label} width={100} height={100} />
        <Label text={label} />
      </Link>
    </div>
  );
};

export default NavigationCard;
