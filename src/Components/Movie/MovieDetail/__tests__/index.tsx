import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import MovieDetail from "../index";

test("it should not render +18 label", () => {
  const props = {
    open: true,
    // filme infantil
    id: 14,
    onClose: jest.fn(),
  };

  const { getByTestId } = render(<MovieDetail {...props} />);

  const movieBonus = getByTestId("MovieBonusAdult");
  expect(movieBonus.children.length).toBe(0);
});
