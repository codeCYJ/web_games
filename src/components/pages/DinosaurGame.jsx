import { useEffect } from "react";
import drawingDinosaurGame from "../utils/dinosaurGame";

const DinosaurGame = () => {
  useEffect(() => {
    drawingDinosaurGame();
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default DinosaurGame;
