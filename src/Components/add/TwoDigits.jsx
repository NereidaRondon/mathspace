import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import HomeButton from "../HomeButton";
import check from "../../assets/check mark icon.webp";
import incorrect from "../../assets/x icon.webp";
import ActionButtons from '../multiply/ActionButtons';

export default function TwoDigits(){
  
  const navigate = useNavigate();
  const inputOnesRef = useRef(null);
  const inputTensRef = useRef(null);
  const inputHundredsRef = useRef(null);
  const inputCarryTheTensRef = useRef(null);
  const [ones, setOnes] = useState('');
  const [tens, setTens] = useState('');
  const [hundreds, setHundreds] = useState('');
  const [carryTheTens, setCarryTheTens] = useState('');
  const [needCarryTensInput, setNeedCarryTensInput] = useState(false);
  const [needHundredsInput, setNeedHundredsInput] = useState(false);

  const [TopRowNum1, setTopRowNum1] = useState('');
  const [TopRowNum2, setTopRowNum2] = useState('');
  const [BottomRowNum1, setBottomRowNum1] = useState('');
  const [BottomRowNum2, setBottomRowNum2] = useState('');
  const [onesColumnSum, setOnesColumnSum] = useState('');
  const [tensColumnSum, setTensColumnSum] = useState('');
  const [hundredsColumnSum, sethundredsColumnSum] = useState('');

  const [userInput, setUserInput] = useState('');
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showExitBtn, setShowExitBtn] = useState(false);
  const [showCheckBtn, setShowCheckBtn] = useState(true);
  const [showClearBtn, setShowClearBtn] = useState(true);

  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showCheck, setShowCheck] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  useEffect(()=>{
    NumsGenerator();
  },[]);

  function NumsGenerator(){
    let num1 = Math.floor(Math.random()*50) + 11;
    let num2 = Math.floor(Math.random()*50) + 11;
    let TopRow1 = num1.toString().charAt(0);
    let TopRow2 = num1.toString().charAt(1);
    let BottomRow1 = num2.toString().charAt(0);
    let BottomRow2 = num2.toString().charAt(1);
    setTopRowNum1(TopRow1);
    setTopRowNum2(TopRow2);
    setBottomRowNum1(BottomRow1);
    setBottomRowNum2(BottomRow2);
    console.log(TopRow1);
    console.log(TopRow2);
    console.log(BottomRow1);
    console.log(BottomRow2);

    let onesColumn = Number(TopRow2) + Number(BottomRow2);
    let addTen = 0;

    if(onesColumn > 9){
      setNeedCarryTensInput(true);
      onesColumn -= 10;
      addTen = 1;
      console.log('sum of ones col:', onesColumn);
      setOnesColumnSum(onesColumn);
    } else{
      console.log('sum of ones col:', onesColumn);
      setOnesColumnSum(onesColumn);
    }
    let addHundred = 1;
    let tensColumn = Number(TopRow1) + Number(BottomRow1)+ addTen;
    if(tensColumn > 9){
      setNeedHundredsInput(true);
      tensColumn -= 10;
      sethundredsColumnSum(addHundred);
      console.log(tensColumn);
      setTensColumnSum(tensColumn);
    } else{
      setTensColumnSum(tensColumn);
    }

    console.log('sum of tens col:', tensColumn);
    
  }
  const handleOnesChange = ()=>{
    setOnes(inputOnesRef.current.value);
    console.log(`This is the ones: `+ inputOnesRef.current.value);
  }
  const handleTensChange = ()=>{
    setTens(inputTensRef.current.value);
    console.log(`This is the tens: `+ inputTensRef.current.value);
  }
  const handleHundredsChange = ()=>{
    setHundreds(inputHundredsRef.current.value);
    console.log(`This is the hundreds: `+ inputHundredsRef.current.value);
  }
  const handleCarryTheTensChange = ()=>{
    setCarryTheTens(inputCarryTheTensRef.current.value);
    console.log(`This is the carry: `+ inputCarryTheTensRef.current.value);
  }
  
  const handleExit=()=>{
    navigate('/complete');
  }

    const handleClear = () => {
    //setInputValue('');
    console.log("Inputs cleared!");
  }

  const handleCheck = () => {
    console.log("Check answer!");
    setTotalQuestions(totalQuestions + 1);
    (onesColumnSum == ones)? console.log(true) : console.log(false);
    (tensColumnSum == tens)? console.log(true) : console.log(false);
    (hundredsColumnSum == hundreds)? console.log(true) : console.log(false);
    if(onesColumnSum == ones && tensColumnSum == tens && hundredsColumnSum == hundreds){
      setScore(score + 1);
      setShowCheck(true);
      confetti();
    } else{
      setShowIncorrect(true);
    }
    
    //NumsGenerator();
    setTimeout(()=> {
      if(totalQuestions === 19){
        console.log('done');
        confetti.reset(); 
        navigate('/complete');

      } else{
        //NumsGenerator();
        setShowCheck(false);
        setShowIncorrect(false); 
        confetti.reset(); 
      }
    }, 2000);
  }

  const handleNext = () => {
    //if (turn === 5){
      console.log("Task Complete!");
      //setShowNextBtn(false);
      //setShowCheckClearBtn(false);
      //setShowExitBtn(true);
    //} else{
      console.log("Next!");
      //console.log('turn: ', turn);
      //setShowNextBtn(false);
      //setShowCheckClearBtn(true);
      handleClear();
    //}
  }

  const StarRender = () => {
    return (
      <div className='absolute top-3 md:top-5 right-2 text-xl md:text-3xl w-28 md:w-40'>⭐ {score} / {totalQuestions}</div>
    );

  };

  return(
    <main className='text-white flex-auto'>

      <HomeButton />

      <h2 className='font-gugi text-2xl sm:text-3xl md:text-5xl text-center mt-16 lg:mt-5 m-auto w-4/5'>Column Addition with Two Digits</h2> 
      
      <StarRender />
      
      <section className="border flex flex-nowrap flex-row mx-auto mt-16 w-screen">

        <div id="left-empty-div" className="border border-green-500 mx-auto w-1/3 h-10 sm:h-14"></div>
          
        <div className="border m-auto text-6xl sm:text-8xl text-end leading-25 grid grid-cols-3">

            <div className="w-14 h-20 sm:w-20 sm:h-24"></div>
            {needCarryTensInput && (<input 
                className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
                type='text' 
                maxLength={1}
                ref={inputCarryTheTensRef}
                onChange={handleCarryTheTensChange}
                required
                value={carryTheTens}
              />)}
            {!needCarryTensInput && (<div className="w-14 h-20 sm:w-20 sm:h-24"></div>)}  
            <div className="w-14 h-20 sm:w-20 sm:h-24"></div>

            <div className="w-14 h-20 sm:w-20 sm:h-24"></div>
            <div className="w-14 h-20 sm:w-20 sm:h-24">{TopRowNum1}</div>
            <div className="w-14 h-20 sm:w-20 sm:h-24">{TopRowNum2}</div>

            <div className="w-14 h-20 sm:w-20 sm:h-24 text-center">+</div>
            <div className="w-14 h-20 sm:w-20 sm:h-24">{BottomRowNum1}</div>
            <div className="w-14 h-20 sm:w-20 sm:h-24">{BottomRowNum2}</div>

            <div className="my-1 mb-3 bg-teal-300 w-14 sm:w-20 h-2"></div>
            <div className="my-1 mb-3 bg-teal-300 w-14 sm:w-20 h-2"></div>
            <div className="my-1 mb-3 bg-teal-300 w-14 sm:w-20 h-2"></div>
            
            {needHundredsInput && (<input 
                className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
                type='text' 
                maxLength={1}
                ref={inputHundredsRef}
                onChange={handleHundredsChange}
                value={hundreds}
                required
              />)} 
              {!needHundredsInput && (<div className="w-14 h-20 sm:w-20 sm:h-24"></div>)} 
            <input 
              className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputTensRef}
              onChange={handleTensChange}
              value={tens}
              required
            />   
            <input 
              className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputOnesRef}
              onChange={handleOnesChange}
              value={ones}
              required
            />  

        </div>
      
        <div id="right-div" className="border-2 border-red-600 flex justify-center place-content-end mx-auto w-1/2 sm:w-1/3 h-48">     
            {showCheck && <img src={check} alt='That is correct!' className='check w-9 h-9 sm:w-20 sm:h-20 ms-2' />}
            {showIncorrect && <img src={incorrect} alt='Incorrect answer.' className='incorrect w-9 h-9 sm:w-20 sm:h-20 ms-2' />}
        </div>


      </section>
        <section id="btn-div" className="flex justify-center m-auto w-20 pl-4 h-44">

          <ActionButtons 
            check={handleCheck}
            clear={handleClear}
            next={handleNext} 
            exit={handleExit}
            showCheckBtn={showCheckBtn}  
            showNextBtn={showNextBtn}
            showExitBtn={showExitBtn}
            />
        
        </section>

    </main>
  );
} 