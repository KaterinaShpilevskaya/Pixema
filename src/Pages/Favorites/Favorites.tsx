import React from "react";
import Categories from "../../Components/Categories";

import styles from "./Favorites.module.css";

const Favorites = () => {
  
 return (
    <>
      <div className={styles.container}>
        <Categories />
      </div>
    </>
  );
};

export default Favorites;