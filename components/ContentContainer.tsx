import { CSSProperties } from "react"
import stylevars from "../styles/variables.module.scss";

interface ContentContainerProps {
  style?: CSSProperties;
  className?: string;
}

export default function ContentContainer(props: React.PropsWithChildren<ContentContainerProps>) {
  return <div style={ !props.className ? {
    gap: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: stylevars.mainContentWidth,
    margin: "20px auto 0 auto",
    ...props.style
  } : {}}
    className={props.className}
  >
    {props.children}
  </div>
}