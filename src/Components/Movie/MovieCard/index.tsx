import React, { memo } from "react";
import { imageBaseUrl } from "../../../Api/urls";
import { Container, MovieImg } from "./styles";

interface IProps {
  image: string;
  onClick: () => void;
}

const MovieCard = ({ image, onClick }: IProps) => (
  <Container item onClick={onClick} data-testid="MovieCard">
    <MovieImg src={imageBaseUrl + image} loading="lazy" />
  </Container>
);

export default memo(MovieCard);
