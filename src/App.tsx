import "./App.css";

function App() {
  const grid = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  return (
    <>
      <h1>React Word Search</h1>
      <div className="card">
        <div className="word-grid">
          {grid.map((row, _i) =>
            row.map((c) => <div className="cell">{c}</div>)
          )}
        </div>
      </div>
    </>
  );
}

export default App;
