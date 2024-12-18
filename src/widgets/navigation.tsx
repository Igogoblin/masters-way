import { PLANETS } from "@/shared/config/planets";
import Link from "next/link";
import style from "./navigation.module.css";

interface NavigationProps {
  language: "en" | "ru";
}
export const Navigation = ({ language }: NavigationProps) => {
  return (
    <nav>
      <ul className={style.navigation}>
        {PLANETS.map((planet) => (
          <li key={planet.name.en}>
            <Link href={planet.path}>{planet.name[language]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
