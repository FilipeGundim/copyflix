import MenuIcon from "@material-ui/icons/Menu";
import { NavBarContainer } from "./styled";
import React, { memo } from "react";

interface NavBarProps {
  handleDrawer: () => void;
}

const NavBar = ({ handleDrawer }: NavBarProps) => {
  return (
    <NavBarContainer container justify="space-between" alignItems="center">
      <MenuIcon
        onClick={handleDrawer}
        htmlColor="#ffffff"
        data-testid="NavBarMenu"
      />
    </NavBarContainer>
  );
};

export default memo(NavBar);
