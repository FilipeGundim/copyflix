import React, { memo } from "react";
import { imageBaseUrl } from "../../../Api/urls";
import { Container, MovieImg } from "./styles";

interface IProps {
  image: string;
  onClick: () => void;
}

function MovieCard({ image, onClick }: IProps) {
  return (
    <Container item onClick={onClick} data-testid="MovieCard">
      <MovieImg src={imageBaseUrl + image} loading="lazy" width="100px" />
    </Container>
  );
}

export default memo(MovieCard);
