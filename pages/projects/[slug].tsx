import { useRouter } from "next/router";
import ContentContainer from "../../components/ContentContainer";
import Link from "next/link";
import Text from "../../components/Text"

export default function ProjectPage() {
  const router =  useRouter()
  return <ContentContainer>
    <Text style={{margin: 0}} level={"h2"}>
      <Link href="/projects">Projects</Link> {` > ${router.query.slug}`}
    </Text>
  </ContentContainer>
}