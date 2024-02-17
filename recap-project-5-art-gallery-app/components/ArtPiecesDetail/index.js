import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";
import Chevron from "../../assets/Chevron.svg"
import Close from "../../assets/Close.svg"
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function ArtPiecesDetail({piece, onToggleFavorite}) {
  const [comments, setComments] = useLocalStorageState("comments", {defaultValue:[]})
  
  function handleAddComment(comment) {
   const date = new Date().toLocaleDateString("en-us", {
     dateStyle: "medium",
   });
   setComments([{slug, id: uid(), date, comment}, ...comments])
   console.log(comments)
  }
  function onSubmit(event) {
    event.preventDefault(); 
    const input = event.target.commentInput.value;
    handleAddComment(input)
    event.target.reset()
  }
  const filteredComments = comments.filter((comment) => comment.slug === slug);
  
    return (
      <>
        <Link href="/art-pieces">
          <StyledSVG />
        </Link>
        <ArtPiecePreview
          piece={piece}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledDIV $color="lightgray">
          <p>genre: {genre}</p>

          <p>year: {year}</p>
        </StyledDIV>
        <StyledDIV $center>
          <h3>comments</h3>
          <StyledUl>
            {filteredComments.length === 0 ? (
              <StyledP>be the first to comment!👇</StyledP>
            ) : (
              filteredComments.map((filtered) => (
                <li key={filtered.id}>
                  <StyledComment>
                    <h4>"{filtered.comment}" -</h4>
                    <StyledP>{filtered.date}</StyledP>
                  </StyledComment>
                </li>
              ))
            )}
          </StyledUl>
        </StyledDIV>

        <StyledForm onSubmit={onSubmit}>
          <label htmlFor="comment">Add comment:</label>
          <StyledInput id="comment" name="commentInput"></StyledInput>
          <StyledButton type="submit">submit</StyledButton>
        </StyledForm>
      </>
    );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: auto; 
  max-width: 300px;
  background: lightgrey;
  padding: 2rem; 
`
const StyledInput = styled.input`
  width: 100%;
`
const StyledDIV = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto; 
  max-width: 300px;
  padding: 1rem;
  background-color: ${(props) =>(props.$color? "lightgray": "transparent")};
  align-items: ${(props) =>(props.$center? "center": "start")};
`
const StyledButton = styled.button`
  margin-top: 1rem; 
  color: white;
  align-self: center;
  border: none; 
  background-color: gray; 
`
const StyledSVG = styled(Chevron)`
  position: absolute;
  top:1rem; 
  color: black; 
`
const StyledUl = styled.ul`
 padding: 0;
 list-style-type: none; 
`

const StyledP = styled.p`
 font-style: italic;
 margin-left: 5px;
 margin-right: 5px;

`
const StyledComment = styled.div`
  display:flex; 
  align-items: center;
  justify-content: center;
  width: 100%;
`
const StyledDelete = styled.button`
  color: white;
  align-self: center;
  border: none;
  background-color: transparent;

  &:hover {
    rotate: 45deg; 
  }
`;