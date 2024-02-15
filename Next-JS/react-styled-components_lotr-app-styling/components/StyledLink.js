import styled from "styled-components";
import Link from "next/link";

export default styled(Link)`
  display: flex;
  flex-direction: ${({$direction}) => $direction === "row"? "row": "column"};
  flex-wrap: wrap;
  width: 85px;
  text-decoration: none;
  color: black;
  font-size: small;
`;
