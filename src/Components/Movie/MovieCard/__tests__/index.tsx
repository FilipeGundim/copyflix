import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "../index";

test("it should open movieDetail", () => {
  const props = {
    image: "",
    onClick: jest.fn(),
  };

  const { getByTestId } = render(<MovieCard {...props} />);

  const movieCard = getByTestId("MovieCard");
  movieCard.click();

  expect(props.onClick).toBeCalled();
});
