import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState();

    const [active, setActive] = useState('1');

    const ClickRadioButton = (event) => {
        const value = event.target.value;
        // console.log(value, active);

        setValue(value);
        setActive(value);
    };

    return (
        <div className="container">
            <div className="result">{value}</div>
            <div className="child">
                <div>
                    <input
                        type="radio"
                        value="1"
                        checked={active === '1'}
                        onChange={ClickRadioButton}
                    ></input>
                    <label>First</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="2"
                        checked={active === '2'}
                        onChange={ClickRadioButton}
                    ></input>
                    <label>Second</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="3"
                        checked={active === '3'}
                        onChange={ClickRadioButton}
                    ></input>
                    <label>Third</label>
                </div>
            </div>
        </div>
    );
}

export default App;
