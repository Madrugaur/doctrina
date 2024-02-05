import { CSSProperties } from "react";

interface TitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: CSSProperties;
}
export default function Text(props: React.PropsWithChildren<TitleProps>) {
  const Tag = props.level as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag style={{...props.style}}>{props.children}</Tag>
}