import clsx from "clsx";
import styles from "../styles/pageheader.module.scss";
import Link from "next/link";
import { PageInfo } from "../pages/pages";

interface MenuProps {
  links: PageInfo[];
  open: boolean;
}

export default function Menu(props: MenuProps) {
  return (
    <div
      className={clsx(!props.open && styles.hide, styles.menu)}
    >
      {props.links.map((link, i) => (<Link key={i} href={link.ref}>{link.name}</Link>))}
    </div>
  );
}