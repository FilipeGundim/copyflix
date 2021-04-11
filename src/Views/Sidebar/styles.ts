import styled from "styled-components";
import MaterialDrawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";

export const LeftDrawer = styled(MaterialDrawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 12rem;
    background-color: #141414 !important;
  }
`;

export const Categorie = styled(Link)`
  font-size: 2.5vh !important;
  color: #ffffff !important;
  margin: 0.5rem;
  text-decoration: none;
`;

export const HomeLink = styled(Link)`
  margin: 0.5rem;
  margin-top: 1rem;
  font-size: 3vh !important;
  color: #ffffff !important;
  text-decoration: none;
`;

export const HorizontalLine = styled.hr`
  background-color: #989494 !important;
  margin: 0.5rem;
`;
