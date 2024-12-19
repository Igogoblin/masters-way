import { render, screen } from "@testing-library/react";
// import { PLANETS } from "@/shared/config/planets";
import { Navigation } from "@/widgets/navigation";
import { describe } from "node:test";
import { expect, it } from "vitest";

describe("Navigation", () => {
  it("renders the list items", () => {
    render(<Navigation language="en" />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(8);
    expect(screen.queryByText("Earth")).toBeTruthy();
    expect(screen.queryByText("Mars")).toBeTruthy();
  });

  it("contains the correct links", () => {
    render(<Navigation language="en" />);
    expect(
      screen.getByRole("link", { name: "Earth" }).getAttribute("href")
    ).toBe("/earth");
    expect(
      screen.getByRole("link", { name: "Mars" }).getAttribute("href")
    ).toBe("/mars");
  });
});
