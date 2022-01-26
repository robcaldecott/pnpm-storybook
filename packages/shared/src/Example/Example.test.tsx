import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Example } from ".";

it("renders", () => {
  render(<Example />);
  expect(screen.getByText(/hello, world!/i)).toBeDefined();
});
