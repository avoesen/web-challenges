import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.div`
   display: flex; 
   position: fixed; 
    bottom: 0; 
    right: 0; 
    left: 0;
    background-color: lightgray; 
    height: 4rem;

`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black; 
    border: 1px solid black; 
    height: 100%;
    display: flex; 
    flex-grow:1; 
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: gray;
    }
`

export default function Navigation() {
    return (
      <NavWrapper>
        <StyledLink href="/">Spotlight</StyledLink>
        <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </NavWrapper>
    );
}