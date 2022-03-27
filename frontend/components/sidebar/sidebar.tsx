import React, { FunctionComponent } from "react";
import styles from "./sidebar.module.scss";
import { IconType } from "react-icons";
import {
  AiOutlineHome,
  AiOutlineUserDelete,
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
  AiOutlineMenu,
} from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery, useToggle } from "../../hooks";
interface ISidebar {
  className: string;
}
interface IItem {
  href: string;
  text: string;
  active: boolean;
  Icon: IconType;
}
const items: Array<IItem> = [
  {
    href: "/",
    text: "Home",
    active: false,
    Icon: AiOutlineHome,
  },
  {
    href: "/create",
    text: "Registrar",
    active: false,
    Icon: AiOutlineUserAdd,
  },
  {
    href: "/update",
    text: "Actualizar",
    active: false,
    Icon: AiOutlineUserSwitch,
  },
  {
    href: "/delete",
    text: "Eliminar",
    active: false,
    Icon: AiOutlineUserDelete,
  },
];
export const Sidebar: FunctionComponent<ISidebar> = ({ className }) => {
  const isDesktop = useMediaQuery("(min-width:40rem)");
  const router = useRouter();
  const [open, toggleOpen] = useToggle(false);
  const showSidebar = (open && !isDesktop) || isDesktop;
  return (
    <>
      {!isDesktop && <MobileMenuOpener open={open} toggleOpen={toggleOpen} />}
      {showSidebar && (
        <aside
          className={`${className} ${
            isDesktop ? styles.wrapper : styles.fixedWrapper
          }`}
        >
          <ul className={styles.itemList}>
            {items.map((item) => (
              <Item
                {...item}
                key={item.text}
                active={router.asPath == item.href}
              />
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

const Item: FunctionComponent<IItem> = ({ href, text, active, Icon }) => {
  return (
    <Link href={href}>
      <li className={active ? styles.activeItem : styles.item}>
        <Icon />
        <span>{text}</span>
      </li>
    </Link>
  );
};
const MobileMenuOpener = ({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) => {
  return (
    <div className={styles.menuMobileOpener} onClick={toggleOpen}>
      <AiOutlineMenu color={open ? "white" : "black"} />
    </div>
  );
};
