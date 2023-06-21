export const DATA = [
  {
    id: 0,
    state: "waiting",
    title: "시작",
    color: "skyblue",
    message:
      "총 기회는 5회 주어집니다. \n 배경화면이 초록색이 되었을 때 클릭하시면 됩니다. \n\n시작하려면 현재 화면을 클릭해주세요.",
  },
  {
    id: 1,
    state: "ready",
    color: "#ec9a9a",
    title: "준비",
    message: "배경화면이 초록색이 되었을 때 클릭해주세요.",
  },
  {
    id: 2,
    state: "now",
    color: "#6cbe6c",
    title: "클릭",
    message: "클릭해주세요",
  },
  {
    id: 3,
    state: "fail",
    color: "gray",
    title: "준비 화면에서는 클릭이 불가능합니다.",
    message:
      "빨간색 준비 화면에서는 클릭이 불가능합니다. 처음부터 시작하시려면 화면을 클릭해주세요.",
  },
  {
    id: 4,
    state: "finish",
    color: "gray",
    title: "테스트가 종료되었습니다.",
    message: "",
  },
];
