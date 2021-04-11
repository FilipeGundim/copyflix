import React from "react";
import Modal from "@material-ui/core/Modal";
import useApi from "../../../Api/fetchData";
import { IMovieDetailRes } from "./types";

interface IProps {
  open: boolean;
  onClose: () => void;
  id: number;
}

const MovieDetail: React.FC<IProps> = ({ open, onClose, id }) => {
  const { data } = useApi<IMovieDetailRes>({ _url: `/movie/${id}` });

  console.log(data);

  return (
    <Modal open={open} onClose={onClose}>
      <div />
    </Modal>
  );
};

export default MovieDetail;
