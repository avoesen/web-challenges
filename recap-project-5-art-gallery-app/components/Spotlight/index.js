import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ pieces, onToggleFavorite }) {
  function getRandomSlug() {
    return Math.floor(Math.random() * pieces.length);
  }

  const randomPiece = pieces[getRandomSlug()];
  return (
    <>
      <ArtPiecePreview
        onToggleFavorite={onToggleFavorite}
        piece={randomPiece}
      />
    </>
  );
}