import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Spotlight from "../Components/Spotlight";
import Categorie from "../Components/Categorie";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AppRoutes exact path="/home" component={Spotlight} />
      <AppRoutes exact path="/categories/:id" component={Categorie} />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
