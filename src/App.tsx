import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    const [score, setScore] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {score}
                <button onClick= {()=> setScore(score+1) }>Increase</button>
                <button onClick= {()=> setScore(score-1) }>Decrease</button>
                <button onClick= {()=> setScore(0) }>Reset</button>
            </header>
        </div>
    );
}

export default App;
