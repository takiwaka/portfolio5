import React from "react";
import styled from "styled-components";
import Square from "Components/Tutorial/Square";

type BoardState = ["O" | "X" | null];

type BoardProps = {
  squares: BoardState;
  onClick: (i: number) => void;
};

const Board = (props: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  );

  return (
    <div>
      <BoardLow className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardLow>
      <BoardLow className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardLow>
      <BoardLow className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardLow>
    </div>
  );
};

export default Board;

const BoardLow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;
