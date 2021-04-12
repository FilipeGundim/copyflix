import React, { useCallback, useState } from "react";
import NavBar from "../../Components/Navbar";
import Sidebar from "../Sidebar";
import { AppContainer } from "../../styled";

interface IProps {
  children: React.ReactChild;
}

function AppRouteContainer({ children }: IProps) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeDrawer = useCallback(() => setOpenDrawer(false), []);

  const handleDrawer = useCallback(() => setOpenDrawer(!openDrawer), [
    openDrawer,
  ]);

  return (
    <AppContainer>
      <NavBar handleDrawer={handleDrawer} />
      <Sidebar open={openDrawer} toggleDrawer={closeDrawer} />
      {children}
    </AppContainer>
  );
}

export default AppRouteContainer;
