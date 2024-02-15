
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Left from "../../icons/Left.svg"
import Right from "../../icons/Right.svg"
import Chevron from "../../icons/Chevron.svg"

import StyledList from "@/components/StyledList";
import StyledLink from "@/components/StyledLink";
import StyledDiv from "@/components/StyledDiv";
import StyledImage from "@/components/StyledImage";


export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <StyledLink  href="/volumes">
        <Chevron />
        All Volumes
      </StyledLink>
      <h1>{title}</h1>
      <p>{description}</p>
      <StyledDiv $color={color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}
              <strong>{title}</strong>
            </li>
          ))}
        </StyledList>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledDiv>
      <StyledDiv>
      {previousVolume ? (
        <div>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            <Left />
            Previous Volume {previousVolume.title}
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume {nextVolume.title}
            <Right />
          </StyledLink>
        </div>
      ) : null}
      </StyledDiv>
    </>
  );
}
