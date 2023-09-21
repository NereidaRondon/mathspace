import { useState, useRef, useEffect } from 'react';
import HomeButton from "../HomeButton";

export default function TwoDigits(){

  const inputOnesRef = useRef(null);
  const inputTensRef = useRef(null);
  const inputHundredsRef = useRef(null);
  const inputCarryTheTensRef = useRef(null);
  const [ones, setOnes] = useState(1);
  const [tens, setTens] = useState(1);
  const [hundreds, setHundreds] = useState(1);
  const [carryTheTens, setCarryTheTens] = useState(1);

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


  return(
    <main className='text-white flex-auto'>
      <HomeButton />
      <h2 className='font-gugi text-5xl text-center mt-5 m-auto w-4/5'>Column Addition with Two Digits</h2> 

      <section className="flex flex-nowrap mx-auto mt-16 text-6xl text-end leading-20 w-56">
        <div className="m-auto text-6xl text-end leading-20 grid grid-cols-3">

          <div className=" w-12 h-16"></div>
          <input 
            className="border border-gray-700 w-12 h-16 bg-transparent text-center" 
            type='text' 
            maxLength={1}
            ref={inputCarryTheTensRef}
            onChange={handleCarryTheTensChange}
            required
          />
          <div className="w-12 h-16"></div>
          <div className="w-12 h-16"></div>
          <div className="w-12 h-16">5</div>
          <div className="w-12 h-16">6</div>
          <div className="w-12 h-16 text-center">+</div>
          <div className="w-12 h-16">8</div>
          <div className="w-12 h-16">9</div>
          <div className="my-1 mb-2 bg-teal-300 w-14 h-2"></div>
          <div className="my-1 mb-2 bg-teal-300 w-14 h-2"></div>
          <div className="my-1 mb-2 bg-teal-300 w-14 h-2"></div>
          <input 
            className="border border-gray-700 w-12 h-16 bg-transparent text-center" 
            type='text' 
            maxLength={1}
            ref={inputHundredsRef}
            onChange={handleHundredsChange}
            required
          /> 
          <input 
            className="border border-gray-700 w-12 h-16 bg-transparent text-center" 
            type='text' 
            maxLength={1}
            ref={inputTensRef}
            onChange={handleTensChange}
            required
          />   
          <input 
            className="border border-gray-700 w-12 h-16 bg-transparent text-center" 
            type='text' 
            maxLength={1}
            ref={inputOnesRef}
            onChange={handleOnesChange}
            required
          />  
          
        
        </div>
      </section>
    </main>
  );
} 