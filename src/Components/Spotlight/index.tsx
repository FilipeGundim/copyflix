import React, { memo } from "react";
import { useQuery } from "react-query";
import { getData } from "../../Api";
import { movieUrl } from "../../Api/urls";
import { imageBaseUrl } from "../../Api/urls";
import { SpotlightContainer, Title, Overview } from "./styles";
import { ISpotlightRes } from "./types";

const SPOTLIGHT_QUERY_KEY = "spotlight";
const fetchMovie = () => getData(movieUrl);

function Spotlight() {
  const { data } = useQuery<ISpotlightRes>(SPOTLIGHT_QUERY_KEY, fetchMovie);

  const spotlight = data?.results[Math.floor(Math.random() * 5)];

  const imageUrl = `${imageBaseUrl}${spotlight?.backdrop_path}`;

  return (
    <SpotlightContainer image={imageUrl}>
      <Title>{spotlight?.title}</Title>
      <Overview>{spotlight?.overview}</Overview>
    </SpotlightContainer>
  );
}

export default memo(Spotlight);
