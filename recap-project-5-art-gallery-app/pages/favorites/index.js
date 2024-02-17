import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

export default function FavoritePage({ pieces, onToggleFavorite,}) {
     
    const piecesFav = pieces.filter((piece) => piece.isFavorite);

      if (piecesFav.length === 0 ) return <StyledH4>no favorites yet...</StyledH4>

      else {
              return (
                <>
                  <ArtPieces pieces={piecesFav} onToggleFavorite={onToggleFavorite} />
                </>
              );
      }
}

const StyledH4 = styled.h4`
margin-top: 4rem;
text-align: center;
`