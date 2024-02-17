import styled from "styled-components";
import Navigation from "../Navigation"

const StyledH1 = styled.h1`
    text-align: center;
    position: relative;
`
const Kids = styled.div`
 padding-bottom: 7rem; 
`

export default function Layout({children}) {
    return (
      <>
        <header>
          <StyledH1>ART GALERY</StyledH1>
        </header>
        <Kids>{children}</Kids>
        <Navigation></Navigation>
      </>
    );
}