import "@testing-library/jest-dom";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import MovieDetail from "../index";

const props = {
  open: true,
  // filme infantil
  id: 14,
  onClose: jest.fn(),
};

test("it should not render +18 label", async () => {
  const { getByTestId } = render(<MovieDetail {...props} />);

  const movieBonus = await waitFor(() => getByTestId("MovieBonusAdult"));
  expect(movieBonus.children.length).toBe(0);
});

test("renders the loading component when the app is first rendered", () => {
  const { getByTestId } = render(<MovieDetail {...props} />);
  const loadingCircle = getByTestId("loadingCircle");

  expect(loadingCircle).toBeVisible();
});
