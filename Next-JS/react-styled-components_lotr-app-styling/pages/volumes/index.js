import { introduction, volumes } from "../../lib/data";
import StyledList from "@/components/StyledList";
import StyledLink from "@/components/StyledLink";
import StyledP from "@/components/StyledP";
import StyledImage from "@/components/StyledImage";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <StyledLink $direction="column" $width="80px" href={`/volumes/${volume.slug}`}>
              <StyledImage
                src={volume.cover}
                width={85}
                height={140}
                alt={`Cover Image of ${volume.title}`}
              ></StyledImage>
              <StyledP>{volume.title}</StyledP>
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
