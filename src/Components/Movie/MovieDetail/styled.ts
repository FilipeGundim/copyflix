import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const ModalPaper = styled(Modal)`
  max-height: 50%;
  margin: 1rem;
  margin-top: 5vh;
`;

export const MovieTitle = styled.div`
  position: absolute;
  top: 15vh;
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

  .MuiSvgIcon-root {
    float: right;
  }
`;

export const MovieBonus = styled.div`
  margin: 1rem;
  font-size: 2.2vh;
  color: greenyellow;
`;

export const Img = styled.img`
  height: 300px;
  width: 100%;
  opacity: 0.4;
`;
