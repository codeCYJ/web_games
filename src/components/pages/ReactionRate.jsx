import styled from "styled-components";

const ReactionRate = () => {
  const result = [1, 2];
  const onClickScreen = () => {};
  const averageTime = result?.reduce((a, c) => a + c) / result?.length;
  return (
    <Container>
      <Screen>클릭해서 시작하세요</Screen>
      {result.length > 0 && <div>평균 시간 : {averageTime}ms</div>}
    </Container>
  );
};

const Container = styled.div``;
const Screen = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

export default ReactionRate;
