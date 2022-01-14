import { useLocation, useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieCard from "../Movie/MovieCard";
import { ISpotlightRes } from "../Spotlight/types";
import { movieUrl } from "../../Api/urls";
import { getData } from "../../Api";
import React, { useState, useCallback } from "react";
import { ContainerTitle, Container } from "./styles";
import MovieDetail from "../Movie/MovieDetail";
import { useQuery } from "react-query";

interface Params {
  id: string;
}

const MOVIE_CATEGORIE_QUERY_KEY = "movies";

function Categorie() {
  const [movie, setMovie] = useState<number>();

  const { id } = useParams<Params>();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const title = query.get("title") as string | undefined;

  const filter = `&with_genres=${id}`;

  const { data: categorieList, isFetching } = useQuery<ISpotlightRes>(
    [MOVIE_CATEGORIE_QUERY_KEY, id, title],
    () => getData(`${movieUrl}`, filter),
    { retry: false, enabled: Boolean(id) }
  );

  const onClose = useCallback(() => setMovie(undefined), []);

  const renderMovie = useCallback(({ poster_path, id }) => {
    const onMovieClick = () => setMovie(id);
    return <MovieCard key={id} image={poster_path} onClick={onMovieClick} />;
  }, []);

  if (isFetching) {
    return (
      <Container container justify="center" alignItems="center">
        <CircularProgress color="secondary" />
      </Container>
    );
  }

  return (
    <Container container justify="center" alignItems="center">
      <ContainerTitle>{title}</ContainerTitle>
      {categorieList?.results?.map(renderMovie)}
      <MovieDetail id={movie} onClose={onClose} open={Boolean(movie)} />
    </Container>
  );
}

export default Categorie;
