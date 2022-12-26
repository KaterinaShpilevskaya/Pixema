import React, { useState, ChangeEvent } from "react";
import { Logo } from "../../Assets";
import Search from "../Search";
import User from "../User";
import styles from "./Header.module.css";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  //   const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     onChange(event.target.value);
  //   };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <Search
          value={inputValue}
          //   onChange={onChangeInput}
          disabled={false}
          filters={false}
        />
      </div>
      <div>
        <User username={"Katya Shpilivskaya"} />
      </div>
    </div>
  );
};

export default Header;
