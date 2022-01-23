import { getData } from "../../Api";
import { categorieListUrl } from "../../Api/urls";
import { Categorie, LeftDrawer, HomeLink, HorizontalLine } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ICategorieRes } from "./types";
import React, { useCallback, memo } from "react";
import { useQuery } from "react-query";

interface IProps {
  open: boolean;
  toggleDrawer: () => void;
}

const GENRES_QUERY_KEY = "genres";
const fetchGenres = () => getData(categorieListUrl);

function Sidebar({ open, toggleDrawer }: IProps) {
  const { data: categories, isLoading } = useQuery<ICategorieRes>(
    GENRES_QUERY_KEY,
    fetchGenres
  );

  const renderCategorie = useCallback(
    ({ name, id }) => (
      <Categorie
        to={`/categories/${id}?title=${name}`}
        key={id}
        onClick={toggleDrawer}
      >
        {name}
      </Categorie>
    ),
    [toggleDrawer]
  );

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
        categories?.genres.map(renderCategorie)
      )}
    </LeftDrawer>
  );
}

export default memo(Sidebar);
