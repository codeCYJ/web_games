import { useRef, useState } from "react";
import styled from "styled-components";

import { DATA } from "../datas/ReactionRate";

const ReactionRate = () => {
  const timeout = useRef();
  const [stateIndex, setStateIndex] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [result, setResult] = useState([]);

  const handleReset = () => {
    setResult([]);
    setStateIndex(0);
  };

  const onClickScreen = () => {
    if (DATA[stateIndex].state === "waiting") {
      setStateIndex(1);
      timeout.current = setTimeout(() => {
        setStateIndex(2);
        setStartTime(new Date().getTime());
      }, Math.floor(Math.random() * 1000 + 2000));
    } else if (DATA[stateIndex].state === "ready") {
      clearTimeout(timeout.current);
      setStateIndex(3);
      setStartTime(0);
      setResult([]);
    } else if (DATA[stateIndex].state === "now") {
      setResult([...result, new Date().getTime() - startTime]);
      if (result.length === 4) return setStateIndex(4);
      setStateIndex(1);
      timeout.current = setTimeout(() => {
        setStateIndex(2);
        setStartTime(new Date().getTime());
      }, Math.floor(Math.random() * 1000 + 2000));
    } else if (DATA[stateIndex].state === "fail") {
      setStateIndex(0);
    }
  };

  const averageTime =
    result.length > 0 ? result?.reduce((a, c) => a + c) / result?.length : 0;
  return (
    <Container>
      <Screen onClick={onClickScreen} color={DATA[stateIndex].color}>
        <h1>{DATA[stateIndex].title}</h1>
        <p>
          {DATA[stateIndex].message ||
            `평균 반응속도는 ${averageTime}ms 입니다.`}
        </p>
      </Screen>
      <Right>
        <div>
          {result.map((v, i) => (
            <Row key={i}>
              <dv>{i + 1}번 째 반응속도</dv>
              {`${v} ms`}
            </Row>
          ))}
        </div>
        <ResetButton onClick={handleReset}>RESET</ResetButton>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Screen = styled.div`
  flex: 1;
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

const Right = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  border: 1px solid gray;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  padding: 10px;
`;

const ResetButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-top: 1px solid gray;
`;

export default ReactionRate;
