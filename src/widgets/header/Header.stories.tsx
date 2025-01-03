"use client";
import Header from "./Header";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

interface HeaderArgs {
  logo: string;
  slogan: { en: string; ru: string };
  language: "en" | "ru";
  onLanguageToggle?: () => void;
}

export default {
  title: "Widgets/Header",
  component: Header,
  argTypes: {
    logo: { control: "text" },
    slogan: { control: "object" },
    language: { control: "radio", options: ["en", "ru"] },
  },
} as Meta;

const Template: Story<HeaderArgs> = (args: HeaderArgs) => {
  const [language, setLanguage] = useState(args.language || "en");
  const handleLanguageToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ru" : "en"));
  };

  return (
    <Header
      {...args}
      language={language}
      onLanguageToggle={handleLanguageToggle}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  logo: "@/public/logoSpace.PNG",
  slogan: {
    en: "Explore the universe through the eyes of other worlds",
    ru: "Покорите космос: взгляните на небо глазами других миров",
  },
  language: "en",
};
