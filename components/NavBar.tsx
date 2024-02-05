import { CSSProperties } from "react"
import styles from "../styles/pageheader.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { PageInfo } from "../pages/pages";

interface NavBarProps {
  links: PageInfo[];
  styles?: CSSProperties;
}

export default function NavBar(props: NavBarProps) {
  return <div style={{...props.styles}} className={clsx(styles.navbar)}>
    {props.links.map((link, i) => (<Link key={i} href={link.ref}>{link.name}</Link>))}
  </div>
}