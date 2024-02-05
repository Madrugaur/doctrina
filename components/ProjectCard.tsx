import clsx from "clsx";
import styles from "../styles/projects.module.scss";
import Image from "next/image";
import Text from "./Text";
import TextBox from "./TextBox";
import colors from "../styles/darkmode.module.scss";
import Chip, { ChipProps, ChipType } from "./Chip";
import Row from "./Row";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  chips: ChipType[]
}

export default function ProjectCard(props: ProjectCardProps) {
  return <div className={clsx(styles.projectCard)}>
    <Image src={"/person.jpg"} alt={"Person"} width={380} height={180} style={{borderRadius: "10px 10px 0 0"}}/>
    <Text level="h3" style={{marginLeft: "10px"}}><Link href={`/projects/${props.link}`}>{props.name}</Link></Text>
    <TextBox style={{backgroundColor: colors.backgroundLight, borderRadius: "10px", margin: "10px", height: "28%"}}>{props.description}</TextBox>
    <Row>
      {props.chips.map((chip, i) => (<Chip key={i} type={chip}/>))}
    </Row>
  </div>
}