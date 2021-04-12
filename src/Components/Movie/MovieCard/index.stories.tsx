import React from "react";

import MovieCard from "./index";

export default {
  title: "MovieCard",
  component: MovieCard,
};

const Template = () => (
  <MovieCard
    image="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-696x464.jpg"
    onClick={() => {}}
  />
);

export const MovieCardStorie = Template.bind({});
