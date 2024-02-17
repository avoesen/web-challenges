import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      <StyledUl>
        {pieces.map((piece) => (
            <ArtPiecePreview
              key={piece.slug}
              piece={piece}
              onToggleFavorite={onToggleFavorite}
            />
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  bottom: 5rem; 
  top: 0; 
`;
