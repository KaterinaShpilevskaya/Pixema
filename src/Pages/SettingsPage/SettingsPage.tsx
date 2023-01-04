import React, { FC, useEffect, useState, ReactElement } from "react";

import { useNavigate } from "react-router-dom";
import { Theme } from "../../Constants/@types";
import Button, { ButtonTypes } from "../../Components/Button";
import Input from "../../Components/Input";

import styles from "./SettingsPage.module.css";
import classNames from "classnames";
import Switch from "../../Components/Switch";
import Categories from "../../Components/Categories";
import { useThemeContext } from "../../Context/Theme";

const SettingsPage = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <div className={styles.container}>
        <Categories />

        <div className={styles.settings}>
          <div className={styles.settingsBlock}>
            <h2 className={styles.title}>Profile</h2>
            <div className={styles.inner}>
              <div className={styles.item}>
                <div className={styles.subtitle}>Name</div>
                <div className={styles.box}>{"Artem Lapitsky"}</div>
              </div>

              <div className={styles.item}>
                <div className={styles.subtitle}>Email</div>
                <div className={styles.box}>{"a.lapitsky@gmail.com"}</div>
              </div>
            </div>
          </div>

          <div className={styles.settingsBlock}>
            <h2 className={styles.title}>Password</h2>
            <div className={styles.inner}>
              <div className={styles.item}>
                <div className={styles.subtitle}>Password</div>
                <div className={styles.box}>{"Your password"}</div>
              </div>

              <div className={styles.item}>
                <Input
                  title={"New password"}
                  value={password}
                  onChange={(value: string) => setPassword(value)}
                  placeholder={"Your password"}
                  className={styles.input}
                />

                <Input
                  title={"Confirm password"}
                  value={confirmPassword}
                  onChange={(value: string) => setConfirmPassword(value)}
                  placeholder={"Confirm password"}
                />
              </div>
            </div>
          </div>

          <div className={styles.settingsBlock}>
            <h2 className={styles.title}>Color mode</h2>
            <div className={styles.inner}>
              <div className={styles.item}>
                <div className={styles.subtitle}>
                  <span> {theme === Theme.Light ? "White" : "Dark"}</span>
                </div>
                <span style={{ color: "grey", fontWeight: "500" }}>
                  {theme === Theme.Light ? "Use white thema" : "Use dark thema"}
                </span>
              </div>

              <Switch />
            </div>
          </div>

          <div className={styles.buttonsBlock}>
            <Button
              title={"Cancel"}
              type={ButtonTypes.Secondary}
              onClick={() => {
                navigate("/");
              }}
            />

            <Button
              className={styles.button}
              title={"Save"}
              type={ButtonTypes.Primary}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
