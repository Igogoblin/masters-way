type Planet = {
  name: { en: string; ru: string };
  path: string;
  size: number;
  distance: number;
  temperature: number;
  images: {
    navigator: string;
  };
};

export const PLANETS: Planet[] = [
  {
    name: { en: "Mercury", ru: "Меркурий" },
    path: "/mercury",
    size: 4879, // км
    distance: 57.91, // млн км
    temperature: 167, // °C
    images: {
      navigator: "/realMercury.jpg",
    },
  },
  {
    name: { en: "Venus", ru: "Венера" },
    path: "/venus",
    size: 12104,
    distance: 108.2,
    temperature: 464,
    images: {
      navigator: "/realVenus.jpg",
    },
  },
  {
    name: { en: "Earth", ru: "Земля" },
    path: "/earth",
    size: 12742,
    distance: 149.6,
    temperature: 15,
    images: {
      navigator: "/realEarth.png",
    },
  },
  {
    name: { en: "Mars", ru: "Марс" },
    path: "/mars",
    size: 6779,
    distance: 227.9,
    temperature: -65,
    images: {
      navigator: "/realMars.jpg",
    },
  },
  {
    name: { en: "Jupiter", ru: "Юпитер" },
    path: "/jupiter",
    size: 139820,
    distance: 778.5,
    temperature: -110,
    images: {
      navigator: "/realJupiter.jpg",
    },
  },
  {
    name: { en: "Saturn", ru: "Сатурн" },
    path: "/saturn",
    size: 116460,
    distance: 1434,
    temperature: -140,
    images: {
      navigator: "/realSaturn.png",
    },
  },
  {
    name: { en: "Uranus", ru: "Уран" },
    path: "/uranus",
    size: 50724,
    distance: 2871,
    temperature: -195,
    images: {
      navigator: "/realUran.png",
    },
  },
  {
    name: { en: "Neptune", ru: "Нептун" },
    path: "/neptune",
    size: 49244,
    distance: 4495,
    temperature: -200,
    images: {
      navigator: "/realNeptune.jpg",
    },
  },
];
