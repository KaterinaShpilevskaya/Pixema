import React, { useState } from "react";
import { Logo, LogoBlack } from "../../Assets";
import { useThemeContext } from "../../Context/Theme";
import Search from "../Search";
import User from "../UserName";
import styles from "./Header.module.css";
import { Theme } from "../../Constants/@types";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const { theme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {theme === Theme.Light ? <LogoBlack /> : <Logo />}
      </div>
      <div>
        <Search
          value={inputValue}
          // onChange={onChangeInput}
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
