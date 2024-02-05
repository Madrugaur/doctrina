import Link from "next/link";
import ContentContainer from "../../components/ContentContainer";
import ProjectCard from "../../components/ProjectCard";
import Text from "../../components/Text";
import styles from "../../styles/projects.module.scss"
export default function Projects() {
  return <ContentContainer>
    <Text style={{margin: "0"}}level={"h2"}><Link href="projects">Projects</Link></Text>
    <div className={styles.projectContainer}>
      <ProjectCard name={"Test"} link={"test"} description={"Test"} chips={["java", "c"]} />
      
    </div>
  </ContentContainer>
}