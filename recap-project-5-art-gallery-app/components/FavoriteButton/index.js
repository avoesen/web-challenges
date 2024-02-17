import styled from "styled-components"
import Heart from "../../assets/Heart.svg"

export default function FavoriteButton({isFavorite, onToggleFavorite, slug}) {

    return <StyledButton type="button" onClick={() => {onToggleFavorite(slug)}}>
            <StyledHeart isFavorite= {isFavorite}/>
         </StyledButton>
}
const StyledButton = styled.button`
    background: transparent; 
    border: none;
`
const StyledHeart = styled(Heart)`
  height: 2rem;
  fill: ${(props) => (props.isFavorite ? "black" : "white")};

  &:hover {
    fill: gray;
  }
`;