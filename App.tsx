import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleNumberClick = (number: string) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperationClick = (op: string) => {
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
    setOperation(op);
  };

  const handleEqualsClick = () => {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result: number;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    if (result.toString() === answer) {
      setScore(score + 1);
      generateQuestion();
    } else {
      generateQuestion();
    }

    setCurrentNumber('');
    setPreviousNumber('');
    setOperation('');
  };

  const handleClearClick = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation('');
  };

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const op = Math.floor(Math.random() * 4);
    let result: number;
    let opString: string;

    switch (op) {
      case 0:
        result = num1 + num2;
        opString = '+';
        break;
      case 1:
        result = num1 - num2;
        opString = '-';
        break;
      case 2:
        result = num1 * num2;
        opString = '*';
        break;
      case 3:
        result = num1 / num2;
        opString = '/';
        break;
      default:
        result = 0;
        opString = '';
    }

    setQuestion(`What is ${num1} ${opString} ${num2}?`);
    setAnswer(result.toString());
  };

  const handleStartClick = () => {
    generateQuestion();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Math Game</h1>
      <p className="text-2xl mb-4">Score: {score}</p>
      <p className="text-2xl mb-4">{question}</p>
      <Input
        type="text"
        value={currentNumber}
        readOnly
        className="w-full p-4 text-3xl text-right"
      />
      <div className="grid grid-cols-4 gap-4 mt-4">
        <Button onClick={() => handleNumberClick('7')}>7</Button>
        <Button onClick={() => handleNumberClick('8')}>8</Button>
        <Button onClick={() => handleNumberClick('9')}>9</Button>
        <Button onClick={() => handleOperationClick('/')}>/</Button>
        <Button onClick={() => handleNumberClick('4')}>4</Button>
        <Button onClick={() => handleNumberClick('5')}>5</Button>
        <Button onClick={() => handleNumberClick('6')}>6</Button>
        <Button onClick={() => handleOperationClick('*')}>*</Button>
        <Button onClick={() => handleNumberClick('1')}>1</Button>
        <Button onClick={() => handleNumberClick('2')}>2</Button>
        <Button onClick={() => handleNumberClick('3')}>3</Button>
        <Button onClick={() => handleOperationClick('-')}>-</Button>
        <Button onClick={() => handleNumberClick('0')}>0</Button>
        <Button onClick={handleClearClick}>C</Button>
        <Button onClick={() => handleEqualsClick()}>=</Button>
        <Button onClick={() => handleOperationClick('+')}>+</Button>
      </div>
      <Button onClick={handleStartClick} className="mt-4">Start</Button>
    </div>
  );
};

export default Calculator;