import Image from "next/image";
import MenuButton from "./MenuButton";
import styles from "../styles/pageheader.module.scss"
import stylevars from "../styles/variables.module.scss";
import Menu from "./Menu";
import {useState, useMemo, useEffect} from "react";
import clsx from "clsx";
import { parseScssPxValue } from "../utils/StyleUtils";
import NavBar from "./NavBar";
import useMediaQuery from "../hooks/useMediaQuery";
import Title from "./Text";
import Link from "next/link";
import { PageInfo } from "../pages/pages";
import colors from "../styles/darkmode.module.scss";

interface PageHeaderProps {
  title: string;
  pages: PageInfo[];
}

export default function PageHeader(props: PageHeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const showMenuButton = useMediaQuery(parseScssPxValue(stylevars.mainContentWidth));
  const links = useMemo(() => ["Hello World", "Foo"], []);
  return (
    <div>
      <div className={clsx(styles.pageHeaderContainer)}>
        <Image 
          src="/person.jpg" 
          width="30" 
          height="30" 
          alt="Logo" 
          style={{margin: "auto 0 auto 0", borderRadius: "50%"}}
        />
        <Title level="h2"><Link href="/">{props.title}</Link></Title>
        {showMenuButton ? <MenuButton 
          open={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          styles={{
            height: "30px", 
            width: "30px", 
            margin:"auto 0 auto auto",
            backgroundColor: colors.background
          }}
        /> : 
        <NavBar 
          links={props.pages}
          styles={{
            margin:"auto 0 auto auto",
          }}
        />}
        
      </div>
      <b className={clsx(styles.pageHeaderBottom)}/>
      {
        showMenuButton && menuOpen && 
        <Menu 
          links={props.pages}
          open={menuOpen}
        />
      }
     
    </div>
  )
}