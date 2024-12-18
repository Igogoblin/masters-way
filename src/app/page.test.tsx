import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("page", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeTruthy(); // Проверяем, что элемент существует
  });

  it("renders the list items", () => {
    render(<Home />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(4);
    expect(screen.getByText("Проверка деплоя")).toBeTruthy();
    expect(screen.getByText("Деплой на vercel.")).toBeTruthy();
    expect(screen.getByText("проверка vitest удачна")).toBeTruthy();
    expect(screen.getByText("базовый роутинг готов")).toBeTruthy();
  });
});
