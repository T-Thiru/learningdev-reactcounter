import "./App.css";
import Logo from "./components/Logo";
import PlusMinus from "./components/PlusMinus";
import plus from "./img/plus.svg";
import minus from "./img/minus.svg";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="wrapper main-container">
        <div className="container-counter">
          {counter !== 0 ? (
            <div
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              <PlusMinus plusMinus={minus} />
            </div>
          ) : (
            ""
          )}

          <div className="container-display">
            <Display display={counter} height="H" />
            <div
              onClick={() => {
                setCounter(0);
              }}
            >
              <Display display="Reset" />
            </div>
          </div>
          {counter !== 10 ? (
            <div
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <PlusMinus plusMinus={plus} />
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
      <footer>
        <p className="wrapper">Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
