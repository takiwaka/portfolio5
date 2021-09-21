import React from "react";
import styled from "styled-components";
import Square from "Components/Tutrial/Square"

class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <Status className="status">{status}</Status>
          <BoardLow className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </BoardLow>
          <BoardLow className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </BoardLow>
          <BoardLow className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </BoardLow>
        </div>
      );
    }
  }

  export default Board

  const BoardLow = styled.div`
  &:after{
    clear: both;
    content: "";
    display: table;
  }
`;
  const Status = styled.div`
  margin-bottom: 10px;
`;