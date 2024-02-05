import PageHeader from "../components/PageHeader"
import "../styles/styles.scss"
import pages from "./pages";
export default function App({Component, pageProps}) {
  return (
    <div style={{padding: "0 20px"}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <PageHeader pages={pages} title="Braden Little" />
      <Component {...pageProps} />
    </div>
  );
}