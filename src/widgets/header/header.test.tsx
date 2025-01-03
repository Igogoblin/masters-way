import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides matchers like toBeInTheDocument
import Header from "./Header";
import { expect, vi, it } from "vitest";
import { describe } from "node:test";

// Mock next/image and next/link
vi.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, jsx-a11y/alt-text, @next/next/no-img-element
  default: (props: any) => <img {...props} />, // Mock as simple <img>
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Header Component", () => {
  const mockSlogan = {
    en: "Explore the universe through the eyes of other worlds",
    ru: "Покорите космос: взгляните на небо глазами других миров",
  };

  it("renders the logo, slogan, and language toggle button", () => {
    render(
      <Header slogan={mockSlogan} language="en" onLanguageToggle={() => {}} />
    );

    // Check if logo is rendered
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

    // Check if slogan is rendered in English
    const slogan = screen.getByText(mockSlogan.en);
    expect(slogan).toBeInTheDocument();

    // Check if the language toggle button is rendered
    const toggleButton = screen.getByRole("button", { name: /ru/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it("displays the slogan in the selected language", () => {
    const { rerender } = render(
      <Header slogan={mockSlogan} language="en" onLanguageToggle={() => {}} />
    );

    // Initially displays English slogan
    expect(screen.getByText(mockSlogan.en)).toBeInTheDocument();

    // Re-render with Russian language
    rerender(
      <Header slogan={mockSlogan} language="ru" onLanguageToggle={() => {}} />
    );

    // Displays Russian slogan
    expect(screen.getByText(mockSlogan.ru)).toBeInTheDocument();
  });

  it("renders the logo link to the home page", () => {
    render(
      <Header slogan={mockSlogan} language="en" onLanguageToggle={() => {}} />
    );

    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
