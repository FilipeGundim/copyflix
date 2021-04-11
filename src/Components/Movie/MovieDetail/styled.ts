import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

interface IProps {
  imagem: string;
}

export const ModalPaper = styled(Modal)`
  max-height: 50vh;
  margin: 1rem;
  margin-top: 5vh;
`;

export const MovieTitle = styled.div`
  margin-left: 1rem;
  text-shadow: 1px 1px black;
`;

export const MovieOverview = styled.div`
  margin: 1rem;
  max-height: 30vh;
`;

export const MovieContainer = styled.div`
  max-width: 500px;
  max-height: 80vh;
  overflow-y: scroll;
  margin: auto;
  color: #ffffff;
  font-weight: bold;
  font-size: 3vh;
  background-color: black;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    float: right;
  }
`;

export const MovieBonus = styled.div`
  margin: 1rem;
  font-size: 2.2vh;
  color: greenyellow;
`;

export const Img = styled.div<IProps>`
  background-image: ${(props) => `url(${props.imagem})`};
  background-position: center;
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  opacity: 0.9;
  display: flex;
  align-items: center;
`;
