import React from "react";
import useApi from "../../Api/fetchData";
import { movieUrl } from "../../Api/urls";
import { imageBaseUrl } from "../../Api/utils";
import { SpotlightContainer, Title, Overview } from "./styles";
import { ISpotlightRes } from "./types";

const Spotlight = () => {
  const { data } = useApi<ISpotlightRes>({ _url: movieUrl });

  const spotlight = data?.results[Math.floor(Math.random() * 5)];

  const imageUrl = imageBaseUrl + spotlight?.backdrop_path;

  return (
    <SpotlightContainer image={imageUrl}>
      <Title>{spotlight?.title}</Title>
      <Overview>{spotlight?.overview}</Overview>
    </SpotlightContainer>
  );
};

export default Spotlight;
