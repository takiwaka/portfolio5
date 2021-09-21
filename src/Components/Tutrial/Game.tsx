import React from "react";
import styled from "styled-components";
import Board from "Components/Tutrial/Board"

class Game extends React.Component {
    render() {
      return (
        <GameClass className="GameClass">
          <div className="game-board">
            <Board />
          </div>
          <GameInfo className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </GameInfo>
        </GameClass>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  const GameClass = styled.div`
  display: flex;
  flex-direction: row;
`;

  const GameInfo = styled.div`
  margin-left: 20px;
`;