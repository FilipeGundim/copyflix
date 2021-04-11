import React from "react";
import { imageBaseUrl } from "../../../Api/utils";
import { Container, MovieImg } from "./styles";

interface IProps {
  image: string;
  onClick: () => void;
}

export default function MovieCard({ image, onClick }: IProps) {
  return (
    <Container item onClick={onClick}>
      <MovieImg src={imageBaseUrl + image} loading="lazy" width="100px" />
    </Container>
  );
}