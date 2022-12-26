import React, { FC } from "react";

import styles from "./User.module.css";

type UserProps = {
  username: string;
};

const User: FC<UserProps> = ({username}) => {
  return (
    <div className={styles.container}>
        <div className={styles.card} >
      <div className={styles.letter}>{username[0]}</div>
      </div>
      {username}
    
    </div>
  );
};

export default User;