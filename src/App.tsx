import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const grid = [
    ["S", "J", "C", "A", "M", "P", "M", "C"],
    ["W", "G", "L", "A", "M", "C", "H", "M"],
    ["I", "J", "M", "M", "P", "Y", "Y", "Z"],
    ["M", "V", "K", "B", "E", "A", "C", "H"],
    ["S", "U", "M", "M", "E", "R", "M", "S"],
    ["M", "H", "O", "T", "E", "B", "H", "U"],
    ["K", "O", "I", "G", "U", "F", "U", "N"],
    ["W", "A", "T", "E", "R", "O", "Q", "E"],
  ];

  // const [startPos, setStartPos] = useState({ row: -1, col: -1 });
  // const [stopPos, setStopPos] = useState({ row: -1, col: -1 });
  const [tracking, setTracking] = useState(false);

  const [selection, setSelection] = useState("");

  const [words, setWords] = useState(
    ["BEACH", "SUMMER", "CAMP", "SUN", "FUN", "SWIM", "HOT", "WATER"].map(
      (word) => ({ label: word, selected: false })
    )
  );

  useEffect(() => {
    if (selection === "") {
      return;
    }
    const selectedWord = words.find((word) => word.label === selection);
    if (selectedWord) {
      setWords((words) =>
        words.map((w) =>
          w.label === selectedWord.label ? { ...w, selected: true } : w
        )
      );
    }
  }, [selection]);

  const handleMouseOver = (row: number, col: number) => {
    if (tracking) {
      setSelection(($v) => $v.concat(grid[row][col]));
      // setStopPos({ row, col });
      // Here, you can perform actions on cells between start and stop positions
    }
  };

  function registerCellClick(row: number, col: number) {
    setTracking(true);

    setSelection(grid[row][col]);
    // setStartPos({ row, col });
    // setStopPos({ row: -1, col: -1 });
  }
  function confirmSelection() {
    setSelection("");
    setTracking(false);
  }
  return (
    <>
      {JSON.stringify(selection)}
      <h1>React Word Search</h1>
      <p className="read-the-docs">Find words horizontally and vertically</p>
      <div className="card">
        <div className="word-grid">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="cell"
                onMouseUp={() => confirmSelection()}
                onMouseDown={() => registerCellClick(rowIndex, colIndex)}
                onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))
          )}
        </div>
        <div>
          Guess words
          <ul>
            {words.map((w, i) => (
              <li key={i} className={`word ${w.selected ? "selected" : ""}`}>
                {w.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
