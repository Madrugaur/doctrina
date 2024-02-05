import styles from "../styles/chip.module.scss"
import {Property} from "../node_modules/csstype/index"
 
interface ChipConfig {
  name: string;
  color: Property.BackgroundColor;
}

const chipConfigs: {[key: string]: ChipConfig} = {
  "java": {
    name: "Java",
    color: "#6e2525"
  },
  "c": {
    name: "C",
    color: "#42576b"
  },
  "c++": {
    name: "C++",
    color: "#2b42ac"
  },
  "javascript": {
    name: "Javascript",
    color: "#857700"
  },
  "typescript": {
    name: "Typescript",
    color: "#00327e"
  },
  "mips": {
    name: "MIPS",
    color: "#500101"
  },
  "x86": {
    name: "x86",
    color: "#813e00"
  },
  "c#": {
    name: "C#",
    color: "#490085"
  },
  "php": {
    name: "PHP",
    color: "#4036c4"
  },
  "go": {
    name: "Go",
    color: "#00728f"
  },
  "python": {
    name: "Python",
    color: "#807d00"
  },
  "git": {
    name: "Git",
    color: "#bb5a00"
  },
  "react": {
    name: "ReactJS",
    color: "#0083da"
  },
  "html": {
    name: "HTML",
    color: "#c96100"
  },
  "css": {
    name: "CSS",
    color: "#2571ff"
  },
  "sql": {
    name: "SQL",
    color: "#003cff"
  },
  "mongodb": {
    name: "MongoDB",
    color: "#429200"
  },
  "heroku": {
    name: "Heroku",
    color: "#71008d"
  },
  "postman": {
    name: "Postman",
    color: "#ff4800"
  },
  "docker": {
    name: "Docker",
    color: "#005577"
  },
  "kubernetes": {
    name: "Kubernetes",
    color: "#0059ff"
  },
  "algo": {
    name: "Algorithms",
    color: "#ac0000"
  },
  "os": {
    name: "Operating Systems",
    color: "#09811d"
  },
  "networking": {
    name: "Networking",
    color: "#810050"
  }
};

export type ChipType = keyof typeof chipConfigs;

export interface ChipProps{
  type: ChipType
}

export default function Chip(props: ChipProps) {
  const {type, ...rest} = props;
  const info = chipConfigs[type]
  if (!info) throw new Error(`${type} is not a valid Chip name.`)
  return <div {...rest} style={{backgroundColor: info.color}}className={styles.chip}>{info.name}</div>
}