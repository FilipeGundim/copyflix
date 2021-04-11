import { useLocation, useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import MovieCard from "../Movie/MovieCard";
import { ISpotlightRes } from "../Spotlight/types";
import { movieUrl } from "../../Api/urls";
import useApi from "../../Api/fetchData";
import React from "react";
import { ContainerTitle } from "./styles";

interface Params {
  id: string;
}

function Categorie() {
  const { id } = useParams<Params>();
  const filters = `&with_genres=${id}`;
  const { data: categorieList } = useApi<ISpotlightRes>({
    _url: movieUrl,
    filters,
    dep: id,
  });

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const title = query.get("title") as string | undefined;

  return (
    <Grid container justify="center">
      <ContainerTitle>{title}</ContainerTitle>
      {categorieList?.results?.map(({ poster_path, id }) => (
        <MovieCard key={id} image={poster_path} />
      ))}
    </Grid>
  );
}

export default Categorie;
