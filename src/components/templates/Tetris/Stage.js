import Cell from "components/templates/Tetris/Cell";

const Stage = ({ stage }) => {
  return (
    <div>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </div>
  );
};

export default Stage;
