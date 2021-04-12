import React from "react";

import MovieDetail from "./index";

export default {
  title: "MovieDetail",
  component: MovieDetail,
};

const props = {
  open: true,
  id: 14,
  onClose: () => {},
};

export const Template = () => <MovieDetail {...props} />;
