import Image from "next/image";
import TextBox from "../components/TextBox";
import ContentContainer from "../components/ContentContainer";
import clsx from "clsx";
import styles from "../styles/home.module.scss";
import Text from "../components/Text";
import colors from "../styles/darkmode.module.scss";

export default function HomePage() {
  return <ContentContainer>
    <div className={clsx(styles.intro)}>
      <Image 
        src="/person.jpg"
        width="150"
        height="150" 
        alt={"Profile Picture"}
        style={{borderRadius: "5px"}} 
      />
      <TextBox>
        <Text level="h1">Hello</Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse repellat ea impedit corrupti sed. 
      </TextBox>
    </div>
    <TextBox style={{backgroundColor: colors.backgroundLight, borderRadius: "5px", padding: "10px"}}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vero quia laboriosam molestias cum fuga nam. Aliquid minus veritatis enim ipsum nobis tempora ullam dolorem labore facilis maxime. Inventore, repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa, veniam voluptatibus ex mollitia itaque laudantium tempore distinctio magni quas beatae dolorem voluptatem officia officiis impedit velit ea ab quia!
    </TextBox>
  </ContentContainer>
}
