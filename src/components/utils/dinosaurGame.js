const drawingDinosaurGame = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d"); // 렌더링 컨텍스트와 그리기 함수 사용 할수 있음.

  // ctx.fillStyle = "rgb(200, 0, 0)"; // 캔버스 색상
  // ctx.fillRect(10, 10, 100, 100); // 캔버스 직사각형 fillRect(x,y,width,height)
  // ctx.strokeRect(10, 10, 100, 100); // 캔버스 선 직사각형
  // ctx.clearRect(10, 10, 10, 10); // 캔버스 특정영역 지움

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 공룡 높이와 폭
  const dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
      ctx.fillStyle = "green";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    },
  };

  // dino.draw();

  class Cactus {
    constructor() {
      this.x = 500;
      this.y = 200;
      this.width = 50;
      this.height = 50;
    }

    draw() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  // const cacuts = new Cactus();
  // cacuts.draw();

  let timerX = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cacuts = new Cactus();
    cacuts.draw();
    dino.draw();

    timerX++;

    requestAnimationFrame(animate);
  }

  // setInterval(animate, 50);
  animate();
};

export default drawingDinosaurGame;
