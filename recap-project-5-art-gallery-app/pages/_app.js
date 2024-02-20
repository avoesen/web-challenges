import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
    const [piecesInfo, setPiecesInfo] = useLocalStorageState("pieceInfo", {defaultValue: []});

    useEffect(() => {
      if (data && !error && !isLoading) {
        setPiecesInfo(data.map((piece) =>({...piece, isFavorite: false})))
      }
    }, [data, error])

    if (error) return <div>failed to load</div>;
    if (!data && !error) return <div>loading...</div>;

    function onToggleFavorite(pieceSlug) {
      const favoritePieceToggle = piecesInfo.map((piece) => piece.slug === pieceSlug?{...piece, isFavorite: !piece.isFavorite} : piece)
      setPiecesInfo(favoritePieceToggle)
    }
 
  if (piecesInfo) {return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={piecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      </Layout>
    </>
  );}
  else {return <h1>failed</h1>};
}
