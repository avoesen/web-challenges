import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex; 
`
export default function HomePage() {
  return (
    <Wrapper>
      <BoxWithClassName />
      <BoxWithClassName $color ="black" />
    </Wrapper>
  );
}
