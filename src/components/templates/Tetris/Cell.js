import { StyledCell } from "components/templates/Tetris/styles/StyledCell";
import { TETROMINOS } from "tetrominos";

const Cell = ({ type }) => {
  return (
    <StyledCell type={"type"} color={TETROMINOS[type].color}>
      cell
    </StyledCell>
  );
};

export default Cell;
