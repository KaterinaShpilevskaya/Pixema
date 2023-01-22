import React, { useEffect } from "react";
import CardsList from "../../Components/CardsList";
import Categories from "../../Components/Categories";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import { useParams } from "react-router";
import { getFilms, getSelectedFilm } from "../../Redux/Reducers/filmsReducer";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";

const Home = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const allFilms = useSelector(filmsSelectors.getAllFilms);
  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getSelectedFilm(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.container}>
        <Categories />
        <CardsList cardsList={allFilms} />
      </div>
    </>
  );
};

export default Home;
