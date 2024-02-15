import styled from "styled-components";

export default styled.div`
  
    width: 100px;
    height: 100px;
    background-color: ${({$color = "green"}) => ($color)} ;
    margin: 2rem;
    &:hover {
      background-color: red;
    }
  `;
