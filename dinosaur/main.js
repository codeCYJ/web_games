const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // 렌더링 컨텍스트와 그리기 함수 사용 할수 있음.

// ctx.fillStyle = "rgb(200, 0, 0)"; // 캔버스 색상
// ctx.fillRect(10, 10, 100, 100); // 캔버스 직사각형 fillRect(x,y,width,height)
// ctx.strokeRect(10, 10, 100, 100); // 캔버스 선 직사각형
// ctx.clearRect(10, 10, 10, 10); // 캔버스 특정영역 지움

const roadImg = new Image();
roadImg.src = "img/road.png";

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// canvas.drawImage(roadImg, 0, 0);

const dinoImg = new Image();
dinoImg.src = "img/dino.png";

// 공룡 높이와 폭
const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "#00000000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(dinoImg, this.x, this.y);
  },
};

dino.draw();

const cactusImg = new Image();
cactusImg.src = "img/cactus.png";

class Cactus {
  constructor() {
    this.x = 400;
    this.y = 200;
    this.width = 25;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "#00000000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(cactusImg, this.x, this.y);
  }
}

const cactus = new Cactus();
cactus.draw();

let timer = 0;
let cactues = [];
let isJump = false;
let jumpTimer = 0;
let animationFrame;

const checkCrash = (dino, cactus) => {
  const xDiff = cactus.x - (dino.x + dino.width);
  const yDiff = cactus.y - (dino.y + dino.height);

  if (xDiff < 0 && yDiff < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // cancelAnimationFrame(animationFrame);
  }
};

const animate = () => {
  animationFrame = requestAnimationFrame(animate); // 애니메이션 실행
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 300 === 0) {
    const cacuts = new Cactus();
    cactues.push(cacuts);
  }

  cactues.forEach((c, i, thisCactues) => {
    if (c.x < 0) {
      thisCactues.slice(i, 1);
    }
    c.x--;

    checkCrash(dino, c);

    c.draw();
  });

  if (isJump) {
    dino.y--;
    jumpTimer++;
  } else if (dino.y < 200) {
    dino.y++;
  }

  // if (jumpTimer > 100) {
  //   isJump = false;
  //   jumpTimer = 0;
  // }

  dino.draw();
};

animate();

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    isJump = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    isJump = false;
  }
});
