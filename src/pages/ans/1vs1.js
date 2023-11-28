
import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";





function Square({ value, onSquareClick, isWinningSquare }) {
  const squareClassName = isWinningSquare ? 'bg-green-500' : ' ';

  return (
    <button
      className={`  text-red-900 text-2xl font-bold   px-4  rounded w-20  h-20 m-2   ${squareClassName}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner.symbol;
  } else {
    status = 'Next player  ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="content  ">

<nav class="bg-[#9A1032]  h-[84px] ">
        <StaticImage class="mt-5 ml-56"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../../images/l1.png"/>

        
      <div class="text-center -mt-10 mr-48  ">
    <a href="/" class="mx-4 text-white text-3xl ">Home</a>
    <select class=" mx-4 text-white text-3xl bg-transparent hover:text-black">
    
    <option ><a href="/" class="mx-4 ">tictactoe</a></option>
    <option><a href="/" class="mx-4 text-black  ">1vs1</a></option>
    <option><a href="/" class="mx-4   ">vs cmp</a></option>
    </select >
    <a href="/" class="mx-4 text-white text-3xl  ">About</a>
    <a href="/" class="mx-4 text-white text-3xl ">Pricing</a>
  </div>
  <div class="flex justify-end mr-14 -mt-12 -space-x-14">
       
    <a href="/ams/sigup" class="text-white text-4xl mr-16 border-white border-solide border-2 flex w-62 pr-8 pl-8 h-16 pt-1 hover:bg-white hover:text-pink-950 duration-1000 ">Sign Up</a>
    <a href="/signup" class="flex w-62  h-16   p-3 text-[#9A1032] text-4xl relativ bg-white  border-2 pl-8 pr-8  pt-1 hover:bg-[#9A1032] hover:text-white  duration-1000 ">Sign In</a>
    </div></nav>

    <div className="text-center text-pink-950 text-xl font-medium font-['Qatar2022'] leading-[15px] tracking-[5px] mt-10">Current Mode : 1 Vs 1</div>

    <div class="flex justify-end mr-20 -mt-10  -space-x-7">
       
    <a href="/ans/1vs1" class="text-[#9A1032] rounded-full text-4xl mr-16 border-white border-solide border-2 flex w-62 pr-8 pl-8 h-16 pt-1 hover:bg-[#9A1032] hover:text-white duration-1000 ">1vs1</a>
    <a href="/signup" class="flex w-62  h-16 rounded-full  p-3 bg-[#9A1032]  text-white text-4xl relativ border-2 pl-8 pr-8  pt-1 hover:bg-transparent hover:text-bg[#9A1032] duration-1000 ">vs Computer</a></div>

      <div className="flex justify-center flex-row z-3">

        
        
        <div className="  relative z-50 left-52  top-8    ">
          <div className=" board-row grid grid-cols-3 gap-4">
            <Square
              className=""
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
              isWinningSquare={winner && winner.winningSquares.includes(0)}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
              isWinningSquare={winner && winner.winningSquares.includes(1)}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
              isWinningSquare={winner && winner.winningSquares.includes(2)}
            />
          </div>
          <div className=" board-row grid grid-cols-3 gap-4 ">
            <Square
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
              isWinningSquare={winner && winner.winningSquares.includes(3)}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
              isWinningSquare={winner && winner.winningSquares.includes(4)}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
              isWinningSquare={winner && winner.winningSquares.includes(5)}
            />
          </div>
          <div className="board-row grid grid-cols-3 gap-4 ">
            <Square
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
              isWinningSquare={winner && winner.winningSquares.includes(6)}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
              isWinningSquare={winner && winner.winningSquares.includes(7)}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
              isWinningSquare={winner && winner.winningSquares.includes(8)}
            />
          </div>
        </div>
        
        <StaticImage className=" relative right-32 " alt='erreur mathematique ' src='../../images/a22.png' />
      </div>

      <StaticImage className="match  relative bottom-72 z-1 ml-20 " alt="errer mathematique" src="../../images/a21.png" />

      
     

     

    </div>
    
      
     
  );
}


function calculateWinner(squares) {
  // ... (your calculateWinner function remains the same)

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return{
        symbol: squares[a],
        winningSquares: [a, b, c]
      }
    }
  }
  return null;
}






/**
 * 
  <div className= " bg-lime-400 h-screen">
        
       
      </div>* 




 */