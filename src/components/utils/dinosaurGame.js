const drawingDinosaurGame = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d"); // 렌더링 컨텍스트와 그리기 함수 사용 할수 있음.

  console.log("ct", ctx);

  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(10, 10, 50, 50);
};

export default drawingDinosaurGame;
