import { CSSProperties } from "react";

interface TextBoxProps {
  header?: HTMLElement;
  style?: CSSProperties;
  className?: string;
}

export default function TextBox(props: React.PropsWithChildren<TextBoxProps>) {
  return <div style={{...props.style}} className={props.className}>{props.children}</div>
}