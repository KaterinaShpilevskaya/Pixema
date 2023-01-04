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
            <h2 className={classNames(styles.title, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>Profile</h2>
            <div className={classNames(styles.inner, {
                [styles.whiteTheme]: theme === Theme.Light,
                [styles.whiteThemeBorder] : theme === Theme.Light
            })}>
              <div className={styles.item}>
                <div className={classNames(styles.subtitle, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>Name</div>
                <div className={classNames(styles.box, {
                [styles.whiteTheme]: theme === Theme.Light,
                [styles.whiteThemeBorder] : theme === Theme.Light
            })}>{"Artem Lapitsky"}</div>
              </div>

              <div className={styles.item}>
                <div className={classNames(styles.subtitle, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>Email</div>
                <div className={classNames(styles.box, {
                [styles.whiteTheme]: theme === Theme.Light,
                [styles.whiteThemeBorder] : theme === Theme.Light
            })}>{"a.lapitsky@gmail.com"}</div>
              </div>
            </div>
          </div>

          <div className={classNames(styles.settingsBlock, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>
            <h2 className={styles.title}>Password</h2>
            <div className={classNames(styles.inner, {
                [styles.whiteTheme]: theme === Theme.Light,
                [styles.whiteThemeBorder] : theme === Theme.Light
            })}>
              <div className={styles.item}>
                <div className={classNames(styles.subtitle, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>Password</div>
                <div className={classNames(styles.box, {
                [styles.whiteTheme]: theme === Theme.Light,
                [styles.whiteThemeBorder] : theme === Theme.Light
            })}>{"Your password"}</div>
              </div>

              <div className={styles.item}>
                <Input 
                  title={"New password"}
                  value={password}
                  onChange={(value: string) => setPassword(value)}
                  placeholder={"Your password"}
                  className={classNames(styles.subtitle, {
                    [styles.whiteTheme]: theme === Theme.Light,
                    [styles.whiteThemeBorder] : theme === Theme.Light
                })}
                />

                <Input
                className={classNames(styles.subtitle, {
                    [styles.whiteTheme]: theme === Theme.Light,
                    [styles.whiteThemeBorder] : theme === Theme.Light
                })}
                  title={"Confirm password"}
                  value={confirmPassword}
                  onChange={(value: string) => setConfirmPassword(value)}
                  placeholder={"Confirm password"}
                />
              </div>
            </div>
          </div>

          <div className={styles.settingsBlock}>
            <h2 className={classNames(styles.title, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>Color mode</h2>
            <div className={classNames(styles.inner, {
                [styles.whiteTheme]: theme === Theme.Light,
                [styles.whiteThemeBorder] : theme === Theme.Light
            })}>
              <div className={styles.item}>
                <div className={classNames(styles.subtitle, {
                [styles.whiteTheme]: theme === Theme.Light
            })}>
                  <span> {theme === Theme.Light ? "White" : "Dark"}</span>
                </div>
                <span  className={classNames(styles.subtitle, {
                [styles.whiteTheme]: theme === Theme.Light
            })}style={{ color: "grey", fontWeight: "500" }}>
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
