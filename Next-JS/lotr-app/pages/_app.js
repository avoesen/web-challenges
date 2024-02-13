import GlobalStyle from "../styles";
import LordOfTheRings from "./volume";
import HomePage from ".";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <LordOfTheRings />
    </>
  );
}
