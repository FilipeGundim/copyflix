import React from "react";
import useApi from "../../../Api/apiHook";
import { IMovieDetailRes } from "./types";
import CloseIcon from "@material-ui/icons/Close";
import {
  MovieBonus,
  MovieContainer,
  MovieOverview,
  MovieTitle,
  ModalPaper,
  Img,
} from "./styled";
import { imageBaseUrl } from "../../../Api/utils";

interface IProps {
  open: boolean;
  onClose: () => void;
  id?: number;
}

const MovieDetail: React.FC<IProps> = ({ open, onClose, id }) => {
  const { data: movie } = useApi<IMovieDetailRes>({
    _url: `movie/${id}`,
    dep: id,
  });

  const formatedDate =
    movie?.release_date &&
    new Intl.DateTimeFormat("en-US").format(new Date(movie?.release_date));

  return (
    <ModalPaper open={open} onClose={onClose}>
      <MovieContainer>
        <CloseIcon onClick={onClose} />
        <Img imagem={imageBaseUrl + movie?.backdrop_path!}>
          <MovieTitle>{movie?.title}</MovieTitle>
        </Img>
        <MovieBonus data-testid="MovieBonus">
          Release date: {formatedDate}&nbsp;
          <br />
          Vote average: {movie?.vote_average}
          <span data-testid="MovieBonusAdult">{movie?.adult && " +18"}</span>
        </MovieBonus>
        <MovieOverview>{movie?.overview}</MovieOverview>
      </MovieContainer>
    </ModalPaper>
  );
};

export default MovieDetail;
