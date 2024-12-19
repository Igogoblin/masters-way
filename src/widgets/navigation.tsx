import { PLANETS } from "@/shared/config/planets";
import Link from "next/link";
import style from "./navigation.module.css";
import Image from "next/image";

interface NavigationProps {
  language: "en" | "ru";
}
export const Navigation = ({ language }: NavigationProps) => {
  if (!language) language = "en";
  return (
    <nav>
      <ul className={style.navigation}>
        {PLANETS.map((planet) => (
          <li key={planet.name.en}>
            <Link href={planet.path}>
              <Image
                src={planet.images.navigator}
                alt={planet.name[language]}
                width={100}
                height={100}
              />
              {planet.name[language]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
