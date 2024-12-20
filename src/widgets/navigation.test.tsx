import { render, screen } from "@testing-library/react";
// import { PLANETS } from "@/shared/config/planets";
import { Navigation } from "@/widgets/navigation";
import { describe } from "node:test";
import { expect, it } from "vitest";
import { vi } from "vitest";
import { JSX } from "react";

vi.mock("next/image", () => ({
  default: (props: JSX.IntrinsicElements["img"]) => <img {...props} />,
}));

describe("Navigation", () => {
  it("renders the list items", () => {
    render(<Navigation language="en" />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(8);
    expect(screen.queryByText("Earth")).toBeTruthy();
    expect(screen.queryByText("Mars")).toBeTruthy();
  });

  // it("contains the correct links", () => {
  //   render(<Navigation language="en" />);
  //   // expect(
  //   //   screen.getByRole("link", { name: "Earth" }).getAttribute("href")
  //   // ).toBe("/earth");
  //   // expect(screen.getByRole("link", { name: "Earth" })).toHaveAttribute(
  //   //   "href",
  //   //   "/earth"
  //   // );
  //   expect(
  //     screen.getByRole("link", { name: "Mars" }).getAttribute("href")
  //   ).toBe("/mars");
  // });
  it("renders the correct text for each planet in English", () => {
    render(<Navigation language="en" />);
    expect(screen.queryByText("Earth")).toBeTruthy();
    expect(screen.queryByText("Mars")).toBeTruthy();
  });
  it("renders images with correct alt text", () => {
    render(<Navigation language="en" />);
    const earthImage = screen.getByAltText("Earth");
    const marsImage = screen.getByAltText("Mars");

    expect(earthImage).toBeTruthy();
    expect(earthImage.getAttribute("alt")).toBe("Earth");
    expect(earthImage.getAttribute("src")).toBe("/realEarth.png");

    expect(marsImage).toBeTruthy();
    expect(marsImage.getAttribute("alt")).toBe("Mars");
    expect(marsImage.getAttribute("src")).toBe("/realMars.jpg");
  });
  it("renders the correct labels", () => {
    render(<Navigation language="en" />);
    expect(screen.queryByText("Earth")).toBeTruthy();
    expect(screen.queryByText("Mars")).toBeTruthy();
  });
});
