import { useState, useRef } from 'react';
import { useNavigate} from "react-router-dom";
import ActionButtons from './ActionButtons';
import Header from './Header';
import MultiplyMenu from './MultiplyMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home(){

  const navigate = useNavigate();
  
    const inputRef = useRef(null);
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(true);
  //const [showComplete, setShowComplete] = useState(false);
  const [multiplier, setMultiplier] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [usedNumbers, setUsedNumbers] = useState([0]);
  const [multiplicand, setMultiplicand] = useState(0);
  const [showCheckClearBtn, setShowCheckClearBtn] = useState(true);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showExitBtn, setShowExitBtn] = useState(false);
  const [productValue, setProductValue] = useState(null);
  console.log(score);

  //! CLICK OR CHANGE FUNCTIONS

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
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        closeButton: false
      })

      setShowNextBtn(true);
      setShowCheckClearBtn(false);
      setScore(score + 1);
      setUsedNumbers(usedNumbers => [...usedNumbers, multiplicand]);
    }else{
      // console.log('Try again...');
      toast.error("Try again...", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        closeButton: false
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
        className='equation-size product-div' 
        type='number' 
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='?'
        tabIndex={4}
        name='answer'
      />
    );
  }
  
  return(
    <>
   
      <Header score={score} />

      <main className='main-div'> 
         
        <section className='equation-div'tabIndex={3}>

          <p className='equation-size multiple-area' >{multiplier}</p>
          <p className='math-signs' >✖️</p>
          <p className='equation-size multiple-area'>{multiplicand}</p>
          <p className='math-signs'>🟰</p>
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
  
        <ToastContainer />
      </main>

        {showModal && 
          <MultiplyMenu 
          start={handleStart}
          multiplier={multiplier}
          handleRadioChange={handleRadioChange}
          />
        }
        {/* {showComplete && 
          <Complete />
        } */}
      
    </>


  );
}