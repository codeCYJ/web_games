import { useEffect } from "react";
import { styled } from "styled-components";
import drawingDinosaurGame from "../utils/dinosaurGame";
import imgRoad from "../../assets/img/road.png";

const DinosaurGame = () => {
  useEffect(() => {
    drawingDinosaurGame();
  }, []);

  return (
    <div>
      <Canvas id="canvas"></Canvas>
    </div>
  );
};

const Canvas = styled.canvas`
  background: url(${imgRoad}) left bottom;
  background-repeat: repeat-x;
`;

export default DinosaurGame;
