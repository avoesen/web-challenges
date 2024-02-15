 import styled from "styled-components";
 
 export default styled.div`
  display: flex;
  background-color: ${({$color}) => $color || "white"};
  justify-content: space-around;
  padding: 1rem;
  `