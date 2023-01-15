import React, { useEffect } from "react";
import CardsList from "../../Components/CardsList";
import Categories from "../../Components/Categories";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import { useParams } from "react-router";
import { getFilms, getSelectedFilm } from "../../Redux/Reducers/filmsReducer";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";

// const MOCK_CARDS_LIST = [
//   {
//     id: 0,
//     image:
//       "https://img3.akspic.ru/previews/9/6/1/9/6/169169/169169-ty_zasluzhivaesh_vsyacheskogo_schastya-schaste-strah-voda-polety_na_vozdushnom_share-500x.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 7,
//   },
//   {
//     id: 1,
//     image:
//       "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 7,
//   },
//   {
//     id: 2,
//     image:
//       "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 8,
//   },
//   {
//     id: 3,
//     image:
//       "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 9,
//   },
//   {
//     id: 4,
//     image:
//       "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 10,
//   },
//   {
//     id: 5,
//     image:
//       "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 10,
//   },
//   {
//     id: 6,
//     image:
//       "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
//     title: "Тут будет название фильма",
//     genres: ["Жанр"],
//     rating: 8,
//   },
// ];

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
