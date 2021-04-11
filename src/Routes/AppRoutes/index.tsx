import React from "react";
import { Route } from "react-router-dom";
import { Container } from "../../styled";
import AppRouteContainer from "../../Views/App/App";

const AppRoutes = (props: any) => {
  const { component: Component, ...rest } = props;
  return (
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
};

export default AppRoutes;
