import ArtPiecesDetail from "../../components/ArtPiecesDetail";
import { useRouter } from "next/router";

export default function ArtPiecesSlug({
  pieces, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <h1>help</h1>;
  }

  return <ArtPiecesDetail piece={piece} onToggleFavorite={onToggleFavorite} />;
}