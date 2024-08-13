import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("It should start at 0", () => {
    // Arrange & Act
    render(<CountButton />);
    // Assert
    expect(screen.getByRole("button")).toHaveTextContent("count is 0");
  });

  it("Should increment one per click", () => {
    render(<CountButton />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/1/);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/3/);
  });
});
