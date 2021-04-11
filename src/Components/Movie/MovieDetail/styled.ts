import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const ModalPaper = styled(Modal)`
  margin-top: 15vh;
`;

export const MovieTitle = styled.div`
  position: fixed;
  top: 30vh;
  margin-left: 1rem;
`;

export const MovieOverview = styled.div`
  margin: 1rem;
`;

export const MovieContainer = styled.div`
  max-width: 500px;
  margin: auto;
  color: #ffffff;
  font-weight: bold;
  font-size: 3vh;
  background-color: black;
`;

export const MovieBonus = styled.div`
  margin: 1rem;
  font-size: 2.2vh;
`;

export const Img = styled.img`
  width: 100%;
  opacity: 0.4;
`;
