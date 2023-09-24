import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HomeButton from "../HomeButton";
import ActionButtons from '../multiply/ActionButtons';

export default function TwoDigits(){
  
  const navigate = useNavigate();
  const inputOnesRef = useRef(null);
  const inputTensRef = useRef(null);
  const inputHundredsRef = useRef(null);
  const inputCarryTheTensRef = useRef(null);
  const [ones, setOnes] = useState(1);
  const [tens, setTens] = useState(1);
  const [hundreds, setHundreds] = useState(1);
  const [carryTheTens, setCarryTheTens] = useState(1);
  const [needCarryTensInput, setNeedCarryTensInput] = useState(false);
  const [needHundredsInput, setNeedHundredsInput] = useState(false);
  const [onesInputValue, setOnesInputValue] = useState('');
  const [tensInputValue, setTenInputValue] = useState('');
  const [hundredsInputValue, setHundredsInputValue] = useState('');
  const [carryInputValue, setCarryInputValue] = useState('');

  const [TopRowNum1, setTopRowNum1] = useState('');
  const [TopRowNum2, setTopRowNum2] = useState('');
  const [BottomRowNum1, setBottomRowNum1] = useState('');
  const [BottomRowNum2, setBottomRowNum2] = useState('');
  const [onesColumnSum, setOnesColumnSum] = useState('');
  const [tensColumnSum, setTensColumnSum] = useState('');

  const [userInput, setUserInput] = useState('');
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showExitBtn, setShowExitBtn] = useState(false);
  const [showCheckBtn, setShowCheckBtn] = useState(true);
  const [showClearBtn, setShowClearBtn] = useState(true);

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
    if(onesColumn > 9){
      setNeedCarryTensInput(true);
      onesColumn -= 10;
    }
    let tensColumn = Number(TopRow1) + Number(BottomRow1);
    if(tensColumn > 9){
      setNeedHundredsInput(true);
    }

    setOnesColumnSum(onesColumn);
    setTensColumnSum(tensColumn);
    

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
    (onesColumnSum == ones)? console.log(true) : console.log(false);
    (tensColumnSum == tens)? console.log(true) : console.log(false);
    //console.log();
    //console.log();
    //console.log();
    //console.log();
    //console.log(Number(inputValue) === productValue);
    //console.log('turn: ', turn);
    //if(Number(inputValue) === productValue){      
      //toast.success("That is correct!", {
      //   position: "bottom-right",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // })
      // setShowNextBtn(true);
      // setShowCheckClearBtn(false);
      // setScore(score + 1);
      // setUsedNumbers(usedNumbers => [...usedNumbers, multiplicand]);

    // }else{
    //   handleClear();
    //   toast.error("Try again...", {
    //     position: "bottom-right",
    //     autoClose: 1500,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   })
    // } 
    console.log("Check answer!");
    //NumsGenerator();
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

  return(
    <main className='text-white flex-auto'>
      <HomeButton />
      <h2 className='font-gugi text-5xl text-center mt-5 m-auto w-4/5'>Column Addition with Two Digits</h2> 
      
      <section className="flex flex-wrap sm:flex-nowrap flex-col sm:flex-row mx-auto mt-16 w-screen">


        <div id="left-empty-div" className="mx-auto w-1/3 h-10 sm:h-14"></div>
          
        <div className="m-auto text-6xl sm:text-8xl text-end leading-25 grid grid-cols-3">

            <div className="w-14 h-20 sm:w-20 sm:h-24"></div>
            {needCarryTensInput && (<input 
              className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputCarryTheTensRef}
              onChange={handleCarryTheTensChange}
              required
              value={carryInputValue}
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
                value={hundredsInputValue}
                required
              />)} 
              {!needHundredsInput && (<div className="w-14 h-20 sm:w-20 sm:h-24"></div>)} 
            <input 
              className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputTensRef}
              onChange={handleTensChange}
              value={tensInputValue}
              required
              />   
            <input 
              className="border-2 border-gray-500 w-14 h-20 sm:w-20 sm:h-24 bg-transparent text-center rounded-md" 
              type='text' 
              maxLength={1}
              ref={inputOnesRef}
              onChange={handleOnesChange}
              value={onesInputValue}
              required
              />  

        </div>
      
        <div id="right-div" className="mx-auto mt-10 sm:mt-72 w-1/2 sm:w-1/3 h-28">
          
          <ActionButtons 
            check={handleCheck}
            clear={handleClear}
            next={handleNext} 
            exit={handleExit}
            showCheckBtn={showCheckBtn} 
            //showClearBtn={showClearBtn} 
            showNextBtn={showNextBtn}
            showExitBtn={showExitBtn}
          />
        </div>

      </section>
    </main>
  );
} 