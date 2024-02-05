import React, { CSSProperties } from "react";
import styles from "../styles/pageheader.module.scss"
import clsx from "clsx";
import colors from "../styles/darkmode.module.scss";

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
  styles?: CSSProperties;
  className?: string;
}
export default function MenuButton(props: MenuButtonProps) {
  return (
      <div 
        style={{
          height: "28px", 
          width: "28px", 
          border: "none",
          backgroundColor: colors.background, 
          ...props.styles
        }} 
        onClick={props.onClick}
        className={clsx(styles.menuButton, props.open && styles.menuButtonAnimate, props.className)}
        >
        <b/>
        <b/>
        <b/>
      </div>
  )
}