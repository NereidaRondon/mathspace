import { useState, useRef } from 'react';
import { useNavigate} from "react-router-dom";
import ActionButtons from './ActionButtons';
import Header from './Header';
import MultiplyMenu from './MultiplyMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counters from './Counters';

export default function Home(){

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [usedNumbers, setUsedNumbers] = useState([0]);
  const [multiplicand, setMultiplicand] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showExitBtn, setShowExitBtn] = useState(false);
  const [productValue, setProductValue] = useState(null);
  const [showCheckClearBtn, setShowCheckClearBtn] = useState(true);
  console.log(score);

  const handleRadioChange = (num)=>{
    console.log('radio: ', num);
    setMultiplier(num);
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
      // console.log('That is correct!');
      
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
      setUsedNumbers(usedNumbers => [...usedNumbers, multiplicand]);
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
      console.log(usedNumbers);
    }
    
  }

  function handleEquation(){
    let num;
    do{
      num = Math.floor(Math.random()*13);

    } while (usedNumbers.includes(num) && turn < 12);

    console.log('random number: ', num);
  
    setMultiplicand(num);
    setProductValue(multiplier * num);
    
  }

  const productBox = ( )=> {
    return(
      <input 
        id='inputElement' 
        className='border border-blue-400 text-8xl w-52 mx-2 text-center rounded-md bg-cyan-950 text-white' 
        type='number' 
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='?'
        tabIndex={0}
        name='answer'
        />
        );
      }
      
  return(
    
    <>
      <section className='flex justify-center content-center place-items-center'>

        {showModal && 
          <MultiplyMenu 
          start={handleStart}
          multiplier={multiplier}
          handleRadioChange={handleRadioChange}
          />
        }
      </section>

      <Header score={score} />

      <main className='main-div m-auto flex justify-center items-center w-3/4 h-7/12 rounded-2xl bg-cover text-white'> 
        
         
        <section className='flex flex-row my-12 w-auto justify-around items-center 
        content-center equation-div  h-auto m-auto'tabIndex={0}>

          <p className='text-8xl text-center w-40 px-2 equation-size multiple-area' >{multiplier}</p>
          <p className='text-5xl text-center px-2 math-signs' >✖️</p>
          <p className='text-8xl text-center w-40 px-2 equation-size multiple-area'>{multiplicand}</p>
          <p className='text-5xl text-center px-2 math-signs'>🟰</p>
          {productBox()}

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
      </main>

      <Counters 
        multiplier={multiplier}  
        multiplicand={multiplicand} 
      /> 
    
    </>
  );
}