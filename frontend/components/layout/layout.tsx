import React from "react";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import styles from "./layout.module.scss";
interface ILayout {
  children: React.ReactNode;
}
export const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Sidebar className={styles.sidebar} />
      <Navbar className={styles.navbar} />
      <section className={styles.content}>{children}</section>
    </main>
  );
};
