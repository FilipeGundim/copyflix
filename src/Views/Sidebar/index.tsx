import useApi from "../../Api/apiHook";
import { categorieListUrl } from "../../Api/urls";
import { Categorie, LeftDrawer, HomeLink, HorizontalLine } from "./styles";
import { ICategorieRes } from "./types";

interface IProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar = ({ open, toggleDrawer }: IProps) => {
  const { data: categories } = useApi<ICategorieRes>({
    _url: categorieListUrl,
  });

  return (
    <LeftDrawer anchor="left" open={open} onClose={toggleDrawer}>
      <HomeLink to="/home">Home</HomeLink>
      <HorizontalLine />
      {categories?.genres.map(({ name, id }) => (
        <Categorie
          to={`/categories/${id}?title=${name}`}
          key={id}
          onClick={toggleDrawer}
        >
          {name}
        </Categorie>
      ))}
    </LeftDrawer>
  );
};

export default Sidebar;
