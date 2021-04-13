import styled from "styled-components";

interface IProps {
  image: string;
}

export const SpotlightContainer = styled.div<IProps>`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  background-image: radial-gradient(
      circle,
      rgba(20, 20, 20, 0.7) 0%,
      rgb(20, 20, 20) 100%,
      rgba(20, 20, 20, 1) 100%
    ),
    ${(props) => `url(${props.image})`};
`;

export const Title = styled.div`
  position: absolute;
  margin-top: 5rem;
  margin-left: 2rem;
  font-size: 6vh;
  font-weight: bold;
  color: #ffffff;
`;

export const Overview = styled.div`
  position: absolute;
  margin-top: 20rem;
  margin-left: 2rem;
  font-size: 3vh;
  width: 50%;
  font-weight: bold;
  color: #ffffff;
  overflow: hidden;
  max-height: 15vh;
  text-overflow: ellipsis;
`;
