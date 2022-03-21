import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import styles from "./navbar.module.scss";
interface INavbar {
  className: string;
}
export const Navbar: React.FunctionComponent<INavbar> = ({ className }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <IoNotificationsOutline />
    </div>
  );
};

