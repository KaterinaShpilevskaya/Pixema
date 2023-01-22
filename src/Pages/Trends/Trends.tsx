import React from "react";
import Categories from "../../Components/Categories";

import styles from "./Trends.module.css";

const Trends = () => {
  
 return (
    <>
      <div className={styles.container}>
        <Categories />
      </div>
    </>
  );
};

export default Trends;