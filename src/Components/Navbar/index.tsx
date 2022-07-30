import MenuIcon from "@material-ui/icons/Menu";
import { NavBarContainer } from "./styled";
import React, { memo } from "react";

interface IProps {
  onClick: () => void;
}

const NavBar = ({ onClick }: IProps) => (
  <NavBarContainer container justify="space-between" alignItems="center">
    <MenuIcon onClick={onClick} htmlColor="#ffffff" data-testid="NavBarMenu" />
  </NavBarContainer>
);

export default memo(NavBar);
