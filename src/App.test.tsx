import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("Should be possible to add one todo", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Sleep" },
    });

    fireEvent.click(screen.getByText("Save"));
    expect(screen.getByText("Sleep"));
  });
  it("Should be possible to add multiple todos", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Apple" },
    });
    fireEvent.click(screen.getByText("Save"));
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Sleep" },
    });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Apple"));
    expect(screen.getByText("Sleep"));
  });
});
