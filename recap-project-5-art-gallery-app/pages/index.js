import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces, onToggleFavorite}) {
  return (
    <>
      <Spotlight pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
