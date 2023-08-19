import React, { useState } from 'react';
import ActionButtons from './ActionButtons';
import Stars from './Stars';
export default function Home(){

  const data = [

    { multiplicand: 0,
      product: 0,
    },
    { multiplicand: 1,
      product: 2,
    },
    { multiplicand: 2,
      product: 4,
    },
    { multiplicand: 3, 
      product: 6,
    },
    { multiplicand: 4,
      product: 8,
    },
    { multiplicand: 5,
      product: 10,
    },
  ];
  const multiplier = 2;
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [multiplicand, setMultiplicand] = useState('');
  const [productValue, setProductValue] = useState(null);
  const [showNextBtn, setShowNextBtn] = useState(false);
  console.log(score);

  //! CLICK FUNCTIONS
  const handleStart = () => {
    handleEquation();
    setInputValue('');
    setScore(0);
  }
  
  const handleInputChange = (e)=>{
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  }
  
  const handleCheck = () => {
    console.log(inputValue);
    console.log(productValue);
    console.log(Number(inputValue) === productValue);

    if(Number(inputValue) === productValue){
      console.log('That is correct!');
      setShowNextBtn(true);
      setScore(score + 1);

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
  }

  function handleEquation(){
    let num = Math.floor(Math.random()*21);

    setMultiplicand(num);
    setProductValue(multiplier * num);
  }

  const productBox =()=>{
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
      <div className='header-div'>
        <h1>MathSpace</h1>
        <h2>Learn how to multiply</h2>
        <div className='stars-div'>🌠 
          <Stars score={score}/>
        </div>
      </div>



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