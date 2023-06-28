import Cell from "components/templates/Tetris/Cell";
import { styled } from "styled-components";

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledStage>
  );
};

const StyledStage = styled.div`
  display: grid;
  grid-template-rows: ${({ width, height }) =>
    `repeat(${height}, calc(25vw/${width}))`};
  grid-template-columns: ${({ width }) => `repeat(${width}, 1fr)`};
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;

export default Stage;
