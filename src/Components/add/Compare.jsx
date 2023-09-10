import { useState, useEffect } from 'react';
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import HomeButton from "../HomeButton";
import check from "../../assets/check mark icon.webp";
import incorrect from "../../assets/x icon.webp";

export default function Compare(){

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [showCheck, setShowCheck] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  const buttonClasses = 'w-16 md:w-24 h-16 md:h-24 md:mx-6 border-2 rounded-full border-emerald-950 drop-shadow-3xl bg-emerald-900 text-5xl md:text-7xl outline-emerald-400 hover:bg-emerald-600';

  useEffect(()=>{
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    let firstNum = ( Math.floor(Math.random() * 350) ) + 151;
    let secondNum = ( Math.floor(Math.random() * 400) ) + 151;

    setNum1(firstNum);
    setNum2(secondNum);
    correctAnswer(firstNum, secondNum);
    
  }; 
  const correctAnswer = (x, y) => {
    console.log(x);
    console.log(y);
    if (x < y){
      setAnswer(1);
    } else if(x > y){
      setAnswer(2);
    } else {
      setAnswer(3);
    }
  };
  const handleCheckAnswer=(choice)=>{
    setTotalQuestions(totalQuestions + 1);
    if(answer === choice){
      setScore(score + 1);
      setShowCheck(true);
      confetti();
    } else{
      setShowIncorrect(true);
    }
    setTimeout(()=> {
      generateNumbers();
      setShowCheck(false);
      setShowIncorrect(false); 
      confetti.reset(); 
    }, 2500);
  };

  const StarRender = () => {
    return (
      <div className='absolute top-3 md:top-5 right-2 text-xl md:text-3xl w-28 md:w-40'>⭐ {score} / {totalQuestions}</div>
    );

  };

  return(
    <main className='text-white'>
      <HomeButton />
      <h2 className='font-gugi text-2xl md:text-5xl text-center mt-16 md:mt-5'>Compare Numbers</h2>
      <h3 className='text-3xl md:text-6xl text-center md:my-3'>&#60;, &#62;, &#61;</h3>

      <StarRender />

      <section className="border-red-700 flex content-center justify-center my-10 md:m-20 text-3xl md:text-7xl text-center">
        <div className='w-14 md:w-20'></div>
        
        <h4 className="w-20 md:w-44">{num1}</h4>
        
        <div className="w-12 md:w-20 h-10 md:h-20 mx-2 md:mx-5 md:pt-1 rounded-sm md:rounded-lg text-emerald-950 bg-emerald-300 ">?</div>
        
        <h4 className="w-20 md:w-44">{num2}</h4>
        
        <div className="w-14 md:w-20">
          {showCheck && <img src={check} alt='That is correct!' className='check w-9 md:w-20' />}
          {showIncorrect && <img src={incorrect} alt='Incorrect answer.' className='incorrect w-9 md:w-20' />}
        </div>
      </section>

      <section className="flex justify-around md:justify-center">
        <button className="w-16 md:w-24 h-16 md:h-24 md:mx-6 border-2 rounded-full border-emerald-950 drop-shadow-3xl bg-emerald-900 text-5xl md:text-7xl outline-emerald-400 hover:bg-emerald-600" onClick={()=>{handleCheckAnswer(1)}}><span className="drop-shadow-3xl font-bold">&#60;</span></button>
        
        <button className={buttonClasses} onClick={()=>{handleCheckAnswer(2)}}><span className="drop-shadow-3xl font-bold">&#62;</span></button>
        
        <button className={buttonClasses} onClick={()=>{handleCheckAnswer(3)}}><span className="drop-shadow-3xl font-bold">&#61;</span></button>
      </section>
    </main>
  );
} 