import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import HomeButton from "../HomeButton";
import check from "../../assets/check mark icon.webp";
import incorrect from "../../assets/x icon.webp";
import CheckButton from './CheckButton';

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

  const [showCheckBtn, setShowCheckBtn] = useState(true);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showCheck, setShowCheck] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  useEffect(()=>{
    NumsGenerator();
  },[]);

  function NumsGenerator(){
    
    let TopRow1 = Math.floor(Math.random() * 7) + 3;
    let TopRow2 = Math.floor(Math.random() * 10);
    let BottomRow1 = Math.floor(Math.random() * 7) + 3;
    let BottomRow2 = Math.floor(Math.random() * 10);
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
    console.log(addTen);
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
  const handleOnesChange = () =>{
    setOnes(inputOnesRef.current.value);
    console.log(`This is the ones: `+ inputOnesRef.current.value);
  }
  const handleTensChange = () =>{
    setTens(inputTensRef.current.value);
    console.log(`This is the tens: `+ inputTensRef.current.value);
  }
  const handleHundredsChange = () =>{
    setHundreds(inputHundredsRef.current.value);
    console.log(`This is the hundreds: `+ inputHundredsRef.current.value);
  }
  const handleCarryTheTensChange = () =>{
    setCarryTheTens(inputCarryTheTensRef.current.value);
    console.log(`This is the carry: `+ inputCarryTheTensRef.current.value);
  }
  const handleExit=()=>{
    navigate('/complete');
  }

  const handleClear = () => {
    console.log("Inputs cleared!");
    setCarryTheTens('');
    setOnes('');
    setTens('');
    setHundreds('');
  }

  const handleCheck = () => {
    console.log('Check answer!');
    setTotalQuestions(totalQuestions + 1);

    if(onesColumnSum == ones && tensColumnSum == tens && hundredsColumnSum == hundreds){
      setScore(score + 1);
      setShowCheck(true);
      confetti();
      setShowCheckBtn(false);
      
    } else{
      setShowIncorrect(true);
      setCarryTheTens('');
      (onesColumnSum == ones)? console.log(true) : setOnes('');
      (tensColumnSum == tens)? console.log(true) : setTens('');
      (hundredsColumnSum == hundreds)? console.log(true) : setHundreds('');
    }
    
    setTimeout(()=> {
      if(totalQuestions === 9){
        console.log('done');
        confetti.reset(); 
        handleExit();

      } else{
        handleNext();
        setShowCheck(false);
        setShowIncorrect(false); 
        confetti.reset();
        NumsGenerator(); 
      }
    }, 3000);
  }

  const handleNext = () => {
    handleClear();
    setNeedCarryTensInput(false);
    setNeedHundredsInput(false);

    if (totalQuestions === 10){
      console.log('Complete!');

    } else{
      console.log('Next!');
      console.log('turn: ', totalQuestions);
      setShowCheckBtn(true);
      handleClear();
    }
  }

  const StarRender = () => {
    return (
      <div className='absolute top-3 md:top-5 right-2 text-xl md:text-3xl w-28 md:w-40'>⭐ {score} / {totalQuestions}</div>
    );

  };

  return(
    <main className='text-white flex-auto'>

      <HomeButton />

      <StarRender />

      <h2 className='font-gugi text-2xl sm:text-3xl md:text-5xl text-center mt-16 lg:mt-5 m-auto w-4/5'>Column Addition with Two Digits</h2> 
      <p className='font-quicksand text-xl md:text-4xl text-center my-3 m-auto w-4/5'>Numbers 30-99</p>
      
      
      <section className="flex flex-nowrap flex-row items-end mx-auto mt-10 w-screen">


        {/* Left Empty Div */}
        <div id="left-empty-div" className=" mx-auto w-1/5 md:w-1/3 h-10 sm:h-14"></div>


        {/* Equation Div */} 
        <div className="m-auto text-5xl sm:text-8xl text-end leading-4 sm:leading-25 grid grid-cols-3">


            {/* ROW 1 -- CARRY */}
            <div className="w-12 h-14 sm:w-20 sm:h-24"></div>
            {needCarryTensInput && (<input 
                className="border-2 border-gray-500 w-12 h-14 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
                type='text' 
                maxLength={1}
                ref={inputCarryTheTensRef}
                onChange={handleCarryTheTensChange}
                required
                value={carryTheTens}
              />)}
            {!needCarryTensInput && (<div className="w-12 h-16 sm:w-20 sm:h-24"></div>)}  
            <div className="w-14 h-20 sm:w-20 sm:h-24"></div>
            {/* <div className="w-3 h-14 sm:h-24"></div> */}
            

            {/* ROW 2 -- TOP NUMBERS */}
            <div className="w-12 h-14 sm:w-20 sm:h-24"></div>
            <div className="w-12 h-14 sm:w-20 sm:h-24">{TopRowNum1}</div>
            <div className="w-12 h-14 sm:w-20 sm:h-24">{TopRowNum2}</div>
            {/* <div className="w-3 h-14 sm:h-24"></div> */}
            
            
            {/* ROW 3 -- BOTTOM NUMBERS */}
            <div className="w-12 h-14 sm:w-20 sm:h-24 text-center">+</div>
            <div className="w-12 h-14 sm:w-20 sm:h-24">{BottomRowNum1}</div>
            <div className="w-12 h-14 sm:w-20 sm:h-24">{BottomRowNum2}</div>
            {/* <div className="w-3 h-14 sm:h-24"></div> */}
            

            {/* ROW 4 -- LINE */}
            <div className="sm:my-1 mb-2 sm:mb-3 bg-teal-300 w-14 sm:w-20 h-2"></div>
            <div className="sm:my-1 mb-2 sm:mb-3 bg-teal-300 w-14 sm:w-20 h-2"></div>
            <div className="sm:my-1 mb-2 sm:mb-3 bg-teal-300 w-14 sm:w-20 h-2"></div>
            {/* <div className="sm:my-1 mb-2 sm:mb-3 bg-teal-300 w-3 h-2"></div> */}


            {/* ROW 5 -- ANSWER */}
            {needHundredsInput && (<input 
                className="border-2 border-gray-500 w-12 h-14 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
                type='text' 
                maxLength={1}
                ref={inputHundredsRef}
                onChange={handleHundredsChange}
                value={hundreds}
                required
              />)} 
              {!needHundredsInput && (<div className="w-12 h-14 sm:w-20 sm:h-24"></div>)} 

            <input 
              className="border-2 border-gray-500 w-12 h-14 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputTensRef}
              onChange={handleTensChange}
              value={tens}
              required
            />   

            <input 
              className="border-2 border-gray-500 w-12 h-14 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputOnesRef}
              onChange={handleOnesChange}
              value={ones}
              required
            />  
            {/* <div className="border w-3 h-14 sm:h-24"></div> */}

        </div>
      

        {/* Right Empty Div */}
        <div id="right-div" className="flex justify-start mx-auto items-center w-1/5 md:w-1/3 h-14 sm:h-20 md:h-24">     
            {showCheck && <img src={check} alt='That is correct!' className='check w-9 h-9 sm:w-24 sm:h-24 ms-2' />}
            {showIncorrect && <img src={incorrect} alt='Incorrect answer.' className='incorrect w-9 h-9 sm:w-24 sm:h-24 ms-2' />}
        </div>


      </section>
        <section id="btn-div" className="flex justify-center m-auto w-20 pl-4 h-44">

          <CheckButton 
            handleCheck={handleCheck}
            showCheckBtn={showCheckBtn}  
          />
        
        </section>

    </main>
  );
} 