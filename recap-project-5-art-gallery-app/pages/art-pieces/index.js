import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({pieces, onToggleFavorite}) {
    return <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />;
}