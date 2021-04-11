import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const ContainerTitle = styled.div`
  color: #ffffff;
  width: 100%;
  display: flex;
  height: 5vh;
  align-items: center;
  justify-content: center;
  font-size: 3vh;
  font-weight: bold;
`;

export const Container = styled(Grid)`
  min-height: 100vh;
`;
