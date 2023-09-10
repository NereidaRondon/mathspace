import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActionButtons from '../multiply/ActionButtons';
import Header from '../Header';
import BaseTen from './BaseTen';
import HomeButton from "../HomeButton";
      

export default function AddPage(){
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [addend1, setAddend1] = useState(0);
  const [addend2, setAddend2] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showExitBtn, setShowExitBtn] = useState(false);
  const [sumValue, setSumValue] = useState(null);
  const [showCheckClearBtn, setShowCheckClearBtn] = useState(true);
 
    useEffect(()=>{
    console.log("Let's add!");
    handleStart();
  },[]);

  const handleStart = () => {
    handleEquation();
    setInputValue('');
    setTurn(1);
    console.log('turn: ', turn);
    setScore(0);
  }
  
  const handleInputChange = ()=>{
    setInputValue(inputRef.current.value);
    console.log(`This is my input: `+ inputRef.current.value);
  }
  
  const handleCheck = () => {
    console.log(addend1);
    console.log(addend2);
    console.log(inputValue);
    console.log(sumValue);
    console.log(Number(inputValue) === sumValue);
    console.log('turn: ', turn);
    if(Number(inputValue) === sumValue){      
      toast.success("That is correct!", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      setShowNextBtn(true);
      setShowCheckClearBtn(false);
      setScore(score + 1);

    }else{
      handleClear();
      toast.error("Try again...", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } 
    console.log("Check answer!");
  }
  const handleExit=()=>{
    navigate('/complete');
  }
  
  const handleKeyDown = (event) => {
    if(event.key === 'Enter' && showExitBtn === true){
      console.log("Pressed Exit");
      handleExit();
    } else if (event.key === 'Enter' && showNextBtn === false ) {
      console.log("Pressed Enter for Check");
      handleCheck();
    } else if (event.key === 'Enter' && showNextBtn === true){
      console.log("Pressed Enter for Next");
      handleNext();
    }  
  };
  
  const handleClear = () => {
    setInputValue('');
    console.log("Input cleared!");
  }
  
  const handleNext = () => {
    if (turn === 20){
      console.log("Task Complete!");
      setShowNextBtn(false);
      setShowCheckClearBtn(false);
      setShowExitBtn(true);
    } else{
      setTurn(turn+1);
      console.log("Next!");
      console.log('turn: ', turn);
      setInputValue('');
      setShowNextBtn(false);
      setShowCheckClearBtn(true);
      handleEquation();
      handleClear();
    }
    
  }

  function handleEquation(){
   
    let num1 = Math.floor((Math.random()*30)+6);
    let num2 = Math.floor((Math.random()*20)+1);
    console.log(num1);
    console.log(num2);
    setAddend1(num1);
    setAddend2(num2);
    setSumValue(num1 + num2);
  }
  
  const sumBox = ( )=> {
    return(
      <input 
        id='inputElement' 
        className='flex-auto border-2 border-blue-400 text-2xl sm:text-6xl w-16 sm:w-32 mx-2 sm:mx-4 text-center rounded-md bg-transparent text-white' 
        type='number' 
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='?'
        tabIndex={0}
        name='answer'
        maxLength="3"
        required
        //disabled={disable}
      />
    );
  }
      
  return(
    
    <>
      <Header score={score} />
      
      <HomeButton />

      <main className='m-auto flex flex-col flex-wrap justify-center items-center w-11/12 text-white'> 
        
        <section className='flex my-6 w-auto justify-around items-center content-center equation-div h-auto m-auto' tabIndex={0}>

          <p className='flex-auto text-xl sm:text-6xl text-center w-12 sm:w-32 px-1 sm:px-2 equation-size multiple-area' >{addend1}</p>
          <p className='flex-auto text-lg sm:text-4xl text-center px-1 sm:px-2 math-signs' >➕</p>
          <p className='flex-auto text-xl sm:text-6xl text-center w-12 sm:w-32 px-1 sm:px-2 equation-size multiple-area'>{addend2}</p>
          <p className='flex-auto text-lg sm:text-4xl text-center math-signs'>🟰</p>
          {sumBox()}
          

        </section>

        <ActionButtons 
          check={handleCheck}
          clear={handleClear}
          next={handleNext} 
          exit={handleExit}
          showCheckClearBtn={showCheckClearBtn} 
          showNextBtn={showNextBtn}
          showExitBtn={showExitBtn}
          />
  
        <ToastContainer 
          className='w-auto text-3xl'
          limit={2}
          newestOnTop
          rtl={false}
          pauseOnFocusLoss={false} 
        />

        <BaseTen 
          addend1 = {addend1}
          addend2 = {addend2}
        />
    
      </main>
    </>
  );
}