import "./style/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="floating" style={{ zIndex: "5" }}>
          <p style={{ cursor: "pointer", opacity: "1" }}>
            <a
              href="https://github.com/RedStewart"
              target="blank"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              reedstew.art
            </a>
          </p>
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <p className="text-shadow">reedstew.art</p>
        </div>
      </header>
    </div>
  );
};

export default App;
