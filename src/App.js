import "./App.css";
import Logo from "./components/Logo";

import { useState } from "react";
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import RemoveCounter from "./components/RemoveCounter";

function App() {
  const [counterAdd, setCounterAdd] = useState(0);
  const [displayCounter, setDisplayCounter] = useState([]);
  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <div>
          {counterAdd !== 3 ? (
            <div
              className="container-addRemovecounter"
              onClick={() => {
                setCounterAdd(counterAdd + 1);
                setDisplayCounter((displayCounter) => [
                  ...displayCounter,
                  <Counter />,
                ]);
              }}
            >
              <AddCounter />
            </div>
          ) : (
            ""
          )}

          {counterAdd > 0 ? (
            <div
              className="container-addRemovecounter"
              onClick={() => {
                setCounterAdd(counterAdd - 1);
                const newTab = [...displayCounter];
                newTab.pop();
                setDisplayCounter(newTab);
              }}
            >
              <RemoveCounter />
            </div>
          ) : (
            ""
          )}

          {displayCounter.length < 4 ? (
            <div className="wrapper main-container">
              {displayCounter.map((el, index) => {
                return <div key={index}>{el}</div>;
              })}
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
