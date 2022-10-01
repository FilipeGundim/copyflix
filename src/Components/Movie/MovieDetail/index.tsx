import React from "react";
import { getData } from "../../../Api";
import { IMovieDetailRes } from "./types";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";
import {
  MovieBonus,
  MovieContainer,
  MovieOverview,
  MovieTitle,
  ModalPaper,
  Img,
} from "./styled";
import { imageBaseUrl } from "../../../Api/urls";
import { useQuery } from "react-query";

interface IProps {
  open: boolean;
  onClose: () => void;
  id?: number;
}

const MOVIE_QUERY_KEY = "movie";

function MovieDetail({ open, onClose, id }: IProps) {
  const { data: movie, isFetching } = useQuery<IMovieDetailRes>(
    MOVIE_QUERY_KEY,
    () => getData(`movie/${id}`),
    {
      enabled: !!id,
    }
  );

  return (
    <ModalPaper open={open} onClose={onClose}>
      <MovieContainer>
        {isFetching || !movie ? (
          <CircularProgress color="secondary" data-testid="loadingCircle" />
        ) : (
          <div>
            <CloseIcon onClick={onClose} />
            <Img imagem={imageBaseUrl + movie.backdrop_path!}>
              <MovieTitle>{movie.title}</MovieTitle>
            </Img>
            <MovieBonus data-testid="MovieBonus">
              Release date:&nbsp;
              {new Intl.DateTimeFormat("en-US").format(
                new Date(movie.release_date)
              )}
              &nbsp;
              <br />
              Vote average: {movie.vote_average}
              {movie.adult && (
                <span data-testid="MovieBonusAdult">&nbsp;+18</span>
              )}
            </MovieBonus>
            <MovieOverview>{movie.overview}</MovieOverview>
          </div>
        )}
      </MovieContainer>
    </ModalPaper>
  );
}

export default MovieDetail;
