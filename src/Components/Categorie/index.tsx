import { useLocation, useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import MovieCard from "../Movie/MovieCard";
import { ISpotlightRes } from "../Spotlight/types";
import { movieUrl } from "../../Api/urls";
import useApi from "../../Api/fetchData";
import React, { useState, useCallback } from "react";
import { ContainerTitle } from "./styles";
import MovieDetail from "../Movie/MovieDetail";

interface Params {
  id: string;
}

function Categorie() {
  const [movie, setMovie] = useState<number>();
  const [openDetail, setOpenDetail] = useState(false);

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

  const handleClick = useCallback((movieId) => {
    setMovie(movieId);
    setOpenDetail(true);
  }, []);

  const onClose = useCallback(() => setOpenDetail(false), []);

  return (
    <Grid container justify="center">
      <ContainerTitle>{title}</ContainerTitle>
      {categorieList?.results?.map(({ poster_path, id }) => {
        const onMovieClick = () => handleClick(id);

        return (
          <MovieCard key={id} image={poster_path} onClick={onMovieClick} />
        );
      })}
      <MovieDetail
        id={movie}
        onClose={onClose}
        open={Boolean(openDetail && movie)}
      />
    </Grid>
  );
}

export default Categorie;
