import React from "react";
import { Route } from "react-router-dom";
import { Container } from "../../styled";
import AppRouteContainer from "../../Views/AppContainer/App";

const AppRoutes = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => (
      <Container>
        <AppRouteContainer>
          <Component {...props} />
        </AppRouteContainer>
      </Container>
    )}
  />
);

export default AppRoutes;
