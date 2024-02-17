import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({onToggleFavorite, piece}) {
 const {dimensions, imageSource, title, artist, isFavorite, slug} = piece
 const {width, height} = dimensions
  return (
    <Card>
      <StyledImage src={imageSource} width={width} height={height} alt={title} />
      <StyledLink href={`/art-pieces/${slug}`}>{title}</StyledLink>
      <StyledText>
        <p>by {artist}</p>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
      </StyledText>
    </Card>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Card = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  background-color: lightgrey;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  padding: 1.5rem;
  color: black;
`;
const StyledText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; 
  align-items: center;
  font-style: italic;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color:black; 
  padding-top: 1rem;
`;