import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import './styles/Calculator.css';
import { evaluate, round } from 'mathjs';

function Calculator() {
    const [input, setInput] = useState('');
    const [answer, setAnswer] = useState('');

    //input
    const inputHandler = (event) => {
        if (answer === 'Invalid Input!!') return;
        let val = event.target.innerText;

        let str = input + val;
        if (str.length > 14) return;

        if (answer !== '') {
            setInput(answer + val);
            setAnswer('');
        } else setInput(str);
    };

    //Clear screen
    const clearInput = () => {
        setInput('');
        setAnswer('');
    };

    // calculate final answer
    const calculateAns = () => {
        if (input === '') return;
        let result = 0;
        let finalexpression = input;
        finalexpression = finalexpression.replaceAll('x', '*');
        finalexpression = finalexpression.replaceAll('÷', '/');

        result = evaluate(finalexpression);

        isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
    };

    // remove last character
    const backspace = () => {
        if (answer !== '') {
            setInput(answer.toString().slice(0, -1));
            setAnswer('');
        } else setInput((prev) => prev.slice(0, -1));
    };

    return (
        <>
            <div className="container">
                <div className="main">
                    <Display input={input} setInput={setInput} answer={answer} />
                    <Buttons
                        inputHandler={inputHandler}
                        clearInput={clearInput}
                        backspace={backspace}
                        calculateAns={calculateAns}
                    />
                </div>
            </div>
        </>
    );
}

export default Calculator;
