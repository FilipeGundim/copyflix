import React, { useCallback, useState } from "react";
import NavBar from "../../Components/Navbar";
import Sidebar from "../Sidebar";
import { AppContainer } from "../../styled";

interface IProps {
  children: React.ReactChild;
}

function AppRouteContainer({ children }: IProps) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = useCallback(() => {
    setOpenDrawer((prevState) => !prevState);
  }, []);

  const closeDrawer = useCallback(() => setOpenDrawer(false), []);

  return (
    <AppContainer>
      <NavBar onClick={handleDrawer} />
      <Sidebar open={openDrawer} toggleDrawer={closeDrawer} />
      {children}
    </AppContainer>
  );
}

export default AppRouteContainer;
