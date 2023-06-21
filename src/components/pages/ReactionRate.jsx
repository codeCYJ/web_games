import { useState } from "react";
import styled from "styled-components";

const DATA = [
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
];
const ReactionRate = () => {
  const [stateIndex, setStateIndex] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [result, setResult] = useState([]);

  console.log("startTime:", startTime);
  console.log("endTime:", endTime);
  console.log("endTime - startTime :", endTime - startTime);

  const handleReset = () => {
    setResult([]);
    setStateIndex(0);
  };
  const onClickScreen = () => {
    if (DATA[stateIndex].state === "waiting") {
      setStateIndex(1);
      setTimeout(() => {
        setStateIndex(2);
        setStartTime(new Date().getTime());
      }, Math.floor(Math.random() * 1000 + 2000));
    } else if (DATA[stateIndex].state === "ready") {
      setStateIndex(3);
      clearTimeout();
    } else if (DATA[stateIndex].state === "now") {
      setResult([...result, new Date().getTime() - startTime]);
      setTimeout(() => {
        setStateIndex(1);
        setStartTime(new Date().getTime());
      }, Math.floor(Math.random() * 1000 + 2000));
    } else if (DATA[stateIndex].state === "fail") {
      setStateIndex(0);
      setStartTime(0);
      setEndTime(0);
      setResult([]);
    }
  };
  const averageTime =
    result.length > 0 ? result?.reduce((a, c) => a + c) / result?.length : 0;
  return (
    <Container>
      <Screen onClick={onClickScreen} color={DATA[stateIndex].color}>
        <h1>{DATA[stateIndex].title}</h1>
        <p>{DATA[stateIndex].message}</p>
      </Screen>
      {result.map((v, i) => (
        <p key={i}>{`${i}번째 반응속도 : ${v}ms`}</p>
      ))}
      {result.length > 0 && <div>평균 시간 : {averageTime}ms</div>}
      <button onClick={handleReset}>리셋</button>
    </Container>
  );
};

const Container = styled.div``;
const Screen = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
  line-height: 140%;
  white-space: pre-line;
  cursor: default;
  h1 {
    margin-bottom: 20px;
  }
`;

export default ReactionRate;
