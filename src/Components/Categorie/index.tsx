import { useLocation, useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieCard from "../Movie/MovieCard";
import { ISpotlightRes } from "../Spotlight/types";
import { movieUrl } from "../../Api/urls";
import useApi from "../../Api/apiHook";
import React, { useState, useCallback } from "react";
import { ContainerTitle, Container } from "./styles";
import MovieDetail from "../Movie/MovieDetail";

interface Params {
  id: string;
}

function Categorie() {
  const [movie, setMovie] = useState<number>();
  const [openDetail, setOpenDetail] = useState(false);

  const { id } = useParams<Params>();

  const filters = `&with_genres=${id}`;

  const { data: categorieList, isLoading } = useApi<ISpotlightRes>({
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
    <Container container justify="center" alignItems="center">
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <ContainerTitle>{title}</ContainerTitle>
          {categorieList?.results?.map(({ poster_path, id }) => {
            const onMovieClick = () => handleClick(id);

            return (
              <MovieCard key={id} image={poster_path} onClick={onMovieClick} />
            );
          })}
        </>
      )}
      <MovieDetail
        id={movie}
        onClose={onClose}
        open={Boolean(openDetail && movie)}
      />
    </Container>
  );
}

export default Categorie;
