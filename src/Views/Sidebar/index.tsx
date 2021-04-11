import useApi from "../../Api/apiHook";
import { categorieListUrl } from "../../Api/urls";
import { Categorie, LeftDrawer, HomeLink, HorizontalLine } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ICategorieRes } from "./types";

interface IProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar = ({ open, toggleDrawer }: IProps) => {
  const { data: categories, isLoading } = useApi<ICategorieRes>({
    _url: categorieListUrl,
  });

  return (
    <LeftDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      data-testid="Sidebar"
    >
      <HomeLink to="/home">Home</HomeLink>
      <HorizontalLine />

      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        categories?.genres.map(({ name, id }) => (
          <Categorie
            to={`/categories/${id}?title=${name}`}
            key={id}
            onClick={toggleDrawer}
          >
            {name}
          </Categorie>
        ))
      )}
    </LeftDrawer>
  );
};

export default Sidebar;
