import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("page", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the list items", () => {
    render(<Home />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(screen.getByText("Проверка деплоя")).toBeInTheDocument();
    expect(screen.getByText("Деплой на vercel.")).toBeInTheDocument();
    expect(screen.getByText("проверка vitest удачна")).toBeInTheDocument();
  });
});
