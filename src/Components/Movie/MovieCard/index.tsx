import React from "react";
import { imageBaseUrl } from "../../../Api/utils";
import { Container, MovieImg } from "./styles";

interface IProps {
  image: string;
}

export default function MovieCard({ image }: IProps) {
  return (
    <Container item>
      <MovieImg src={imageBaseUrl + image} loading="lazy" width="100px" />
    </Container>
  );
}
