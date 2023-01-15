import React, { FC, ReactElement } from "react";

import styles from "./FormContainer.module.css";
import { Logo }  from "../../Assets/logo/Logo";
import Footer from "../Footer";
import { Link } from "react-router-dom";

type FormContainerProps  = {
   title: string;
   children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
   return (
      <div className={styles.container}>

         <div className={styles.logo}>
         <Link to={'/'}>
          <Logo />
        </Link>
         </div>

         <div className={styles.formContainer}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.childrenContainer}>{children}</div>
         </div>

         <Footer />
      </div>
   );
};

export default FormContainer;