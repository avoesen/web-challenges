import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({turnAllOn, turnAllOff, roomsOnCount}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={roomsOnCount === 0 ? true : false}
        type="button"
        onClick={() => {
          turnAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={roomsOnCount === 8 ? true : false}
        type="button"
        onClick={() => {
          turnAllOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
