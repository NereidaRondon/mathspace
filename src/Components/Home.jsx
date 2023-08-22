import { useState } from 'react';
import ActionButtons from './ActionButtons';
import Header from './Header';

export default function Home(){

  const multiplier = 2;
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [multiplicand, setMultiplicand] = useState(0);
  const [usedNumbers, setUsedNumbers] = useState([0]);
  const [productValue, setProductValue] = useState(null);
  const [showNextBtn, setShowNextBtn] = useState(false);
  console.log(score);

  //! CLICK FUNCTIONS
  const handleStart = () => {
    handleEquation();
    setInputValue('');
    setTurn(1);
    console.log('turn: ', turn);
    setScore(0);
    setUsedNumbers([0]);
  }
  
  const handleInputChange = (e)=>{
    
    setInputValue(e.target.value);
    console.log(e.target.value);
  }
  
  const handleCheck = () => {
    console.log(usedNumbers);
    console.log(inputValue);
    console.log(productValue);
    console.log(Number(inputValue) === productValue);
    console.log('turn: ', turn);

    if(Number(inputValue) === productValue){
      console.log('That is correct!');
      setShowNextBtn(true);
      setScore(score + 1);
      setTurn(turn+1);

    }else{
      console.log('Try again...');
    } 
    console.log("Check answer!");
  }

  const handleClear = () => {
    setInputValue('');
    console.log("Input cleared!");
  }
  
  const handleNext = () => {
    handleEquation();
    handleClear;
    console.log("Next!");

    setInputValue('');
    setShowNextBtn(false);
    
    console.log('turn: ', turn);

    if (turn === 13){
      console.log("Task Complete!")
    }
  }

  function handleEquation(){
    let num;
    do{
      num = Math.floor(Math.random()*13);

    } while (usedNumbers.includes(num));

    console.log('random number: ', num);
  
    usedNumbers.push(num);
    setMultiplicand(num);
    setProductValue(multiplier * num);
    console.log(usedNumbers);
  }

  const productBox = ( )=> {
    return(
      <input 
        id='inputElement' 
        className='equation-size product-div' 
        type='number' 
        value={inputValue}
        onChange={handleInputChange}
        placeholder='?'
      />
    );
  }
  

  return(
    <>
      <Header score={score} />

      <div className='main-div'> 
         
        <div className='equation-div'>

          <div className='equation-size multiple-area'>{multiplier}</div>
          <div className='math-signs'>✖️</div>
          <div className='equation-size multiple-area'>{multiplicand}</div>
          <div className='math-signs'>🟰</div>
          {productBox()}

        </div>

        <ActionButtons 
          check={handleCheck}
          clear={handleClear}
          next={handleNext}  
          showNextBtn={showNextBtn}
        />

      </div>

        <br></br>
        <button onClick={handleStart}>START</button>
    </>


  );
}