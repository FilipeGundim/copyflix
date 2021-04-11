import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../../../app";

test("it should open SideBar", () => {
  const { getByTestId } = render(<App />);

  const menuButton = getByTestId("NavBarMenu");
  fireEvent.click(menuButton);
  const sideBar = getByTestId("Sidebar");
  expect(sideBar).toBeInTheDocument();
});
