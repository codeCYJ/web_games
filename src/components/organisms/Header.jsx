import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div>
        <a href="/reaction_rate">반응속도</a>
      </div>
      <div>
        <a href="/tetris">테트리스</a>
      </div>
      <div>
        <a href="/dinosaur_game">공룡게임</a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  height: 60px;
`;

export default Header;
