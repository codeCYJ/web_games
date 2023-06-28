import Stage from "components/templates/Tetris/Stage";
import Display from "components/templates/Tetris/Display";
import StartButton from "components/templates/Tetris/StartButton";
import { createStage } from "gameHelpers";
import { styled } from "styled-components";
import bgImage from "img/bg.png";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

const StyledTetrisWrapper = styled.div``;

export default Tetris;
