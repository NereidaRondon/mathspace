import { useState, useRef } from 'react';
import ActionButtons from './ActionButtons';
import Header from './Header';
import Modal from './Modal';

export default function Home(){
  const radioRef = useRef(null);
  const inputRef = useRef(null);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [multiplier, setMultiplier] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [usedNumbers, setUsedNumbers] = useState([0]);
  const [multiplicand, setMultiplicand] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [productValue, setProductValue] = useState(null);
  console.log(score);



  //! CLICK FUNCTIONS

  const handleMultiplier2 = () => {
    setMultiplier(radioRef.current.value);
    console.log(radioRef.current.value);
  }

  const handleMultiplier3 = () => {
    setMultiplier(3);
    console.log(radioRef.current.value);
  }

  const handleMultiplier4 = () => {
    setMultiplier(4);
    console.log(radioRef.current.value);
  }

  const handleMultiplier5 = () => {
    setMultiplier(5);
    console.log(radioRef.current.value);
  }

  const handleMultiplier10 = () => {
    setMultiplier(10);
    console.log(10);
  }

  const handleStart = () => {
    handleEquation();
    setInputValue('');
    setTurn(1);
    console.log('turn: ', turn);
    console.log(multiplier);
    setScore(0);
    setUsedNumbers([0]);
    setShowModal(false);
  }
  
  const handleInputChange = ()=>{
    setInputValue(inputRef.current.value);
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
      setUsedNumbers(usedNumbers => [...usedNumbers, multiplicand]);

    }else{
      console.log('Try again...');
    } 
    console.log("Check answer!");
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && showNextBtn === false ) {
      console.log("Pressed Enter for Check");
      handleCheck();
    } else if (event.key === 'Enter' && showNextBtn === true){
      console.log("Pressed Enter for Next");
      handleNext();
    } else {
      return;
    }
  };

  //onkeydown = (event) => {console.log(event)};

  const handleClear = () => {
    setInputValue('');
    console.log("Input cleared!");
    
  }
  
  const handleNext = () => {
    handleEquation();
    handleClear();
    console.log(usedNumbers);
    console.log("Next!");

    setInputValue('');
    setShowNextBtn(false);
    
    console.log('turn: ', turn);

    if (turn === 12){
      console.log("Task Complete!");

    }
  }

  function handleEquation(){
    let num;
    do{
      num = Math.floor(Math.random()*13);

    } while (usedNumbers.includes(num));

    console.log('random number: ', num);
  
    //usedNumbers.push(num);
    //setUsedNumbers(usedNumbers => [...usedNumbers, num]);
    setMultiplicand(num);
    setProductValue(multiplier * num);
    
  }

  const productBox = ( )=> {
    return(
      <input 
        id='inputElement' 
        className='equation-size product-div' 
        type='number' 
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
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

        {showModal && 
          <Modal 
            ref={radioRef}
            start={handleStart}
            multiplier={multiplier}
            handleMultiplier2={handleMultiplier2}
            handleMultiplier3={handleMultiplier3}
            handleMultiplier4={handleMultiplier4}
            handleMultiplier5={handleMultiplier5}
            handleMultiplier10={handleMultiplier10}
          />
        }
    </>


  );
}