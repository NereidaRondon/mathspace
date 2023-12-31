import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import ActionButtons from './ActionButtons';
import Header from '../Header';
import MultiplyMenu from './MultiplyMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counters from './Counters';
import HomeButton from "../HomeButton";

export default function MultiplyPage(){
  const title = 'Multiplication';
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [design, setDesign] = useState('⭐');
  const [multiplier, setMultiplier] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [usedNumbers, setUsedNumbers] = useState([0]);
  const [multiplicand, setMultiplicand] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showExitBtn, setShowExitBtn] = useState(false);
  const [productValue, setProductValue] = useState(null);
  const [multiplierText, setMultiplierText] = useState(1);
  const [showCheckBtn, setShowCheckBtn] = useState(true);
  const [showClearBtn, setShowClearBtn] = useState(true);
 
  const handleRadioChange = (num)=>{
    console.log('radio: ', num);
    setMultiplierText(num);
  }

  const handleStart = () => {
    console.log(multiplierText);
    setMultiplier(multiplierText);
    handleEquation();
    setInputValue('');
    setTurn(1);
    console.log('turn: ', turn);
    setScore(0);
    setUsedNumbers([0]);
    setShowModal(false);
    handleEmoji();
  }
  
  const handleInputChange = ()=>{
    setInputValue(inputRef.current.value);
    console.log(`This is my input: `+ inputRef.current.value);
  }
  
  const handleCheck = () => {
    console.log(usedNumbers);
    console.log(multiplier);
    console.log(inputValue);
    console.log(productValue);
    console.log(Number(inputValue) === productValue);
    console.log('turn: ', turn);
    if(Number(inputValue) === productValue){      
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
      setShowCheckBtn(false);
      setShowClearBtn(false);
      setScore(score + 1);
      setUsedNumbers(usedNumbers => [...usedNumbers, multiplicand]);
      //setDisable(!disable);

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
    if (turn === 12){
      console.log("Task Complete!");
      setShowNextBtn(false);
      setShowCheckBtn(false);
      setShowClearBtn(false);
      setShowExitBtn(true);
    } else{
      handleEmoji();
      setTurn(turn+1);
      console.log("Next!");
      console.log('turn: ', turn);
      setInputValue('');
      setShowNextBtn(false);
      setShowCheckBtn(true);
      setShowClearBtn(false);
      handleEquation();
      handleClear();
      console.log(usedNumbers);
      //setDisable(!disable);
    }
    
  }

  function handleEquation(){
    let num;
    do{
      num = Math.floor(Math.random()*13);

    } while (usedNumbers.includes(num) && turn < 12);

    console.log('random number: ', num);
  
    setMultiplicand(num);
    setProductValue(multiplierText * num);
    
  }
  const handleEmoji = () => {
    const designs = ['👽', '🚀', '⭐', '🤖', '🪐', '🌎', '🛸' ];
    let emoji = Math.floor(Math.random()*7);
    setDesign(designs[emoji]);
    console.log(emoji);
    console.log(design);
  }
  const productBox = ( )=> {
    return(
      <input 
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
  // const correctAnswer = ()=> {
  //   return(
  //     <div className='flex-auto  text-2xl sm:text-6xl w-16 sm:w-32 mx-2 sm:mx-4 text-center rounded-md bg-transparent text-white'>
  //       {productValue}
  //     </div>
  //   );
  // }
      
  return(
    
    <>
      <HomeButton />

      <section className='flex justify-center content-center place-items-center'>

        {showModal && 
          <MultiplyMenu 
          start={handleStart}
          multiplier={multiplierText}
          handleRadioChange={handleRadioChange}
          />
        }
      </section>

      <Header 
        title={title}
        score={score} 
      />

      <main className='m-auto flex flex-col flex-wrap justify-center items-center w-11/12 2xl:w-2/3 text-white'> 
         
        <section className='flex my-6 w-auto justify-around items-center content-center equation-div h-auto m-auto' tabIndex={0}>

          <p className='flex-auto text-xl sm:text-6xl text-center w-12 sm:w-32 px-1 sm:px-2 equation-size multiple-area'>{multiplier}</p>
          <p className='flex-auto text-lg sm:text-4xl text-center px-1 sm:px-2 math-signs'>✖️</p>
          <p className='flex-auto text-xl sm:text-6xl text-center w-12 sm:w-32 px-1 sm:px-2 equation-size multiple-area'>{multiplicand}</p>
          <p className='flex-auto text-lg sm:text-4xl text-center math-signs'>🟰</p>
          {productBox()}
          
        </section>

        <ActionButtons 
          check={handleCheck}
          clear={handleClear}
          next={handleNext} 
          exit={handleExit}
          showCheckBtn={showCheckBtn} 
          showClearBtn={showClearBtn} 
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

      <Counters 
        design={design}
        multiplier={multiplier}  
        multiplicand={multiplicand} 
      /> 
    
      </main>
    </>
  );
}