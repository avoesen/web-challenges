import styled from "styled-components";
import Link from "next/link";

export default styled(Link)`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  width: ${({ $width }) => $width};
  text-decoration: none;
  align-items: center;
  color: black;
  font-size: var(--font-caption--italic);
`;
