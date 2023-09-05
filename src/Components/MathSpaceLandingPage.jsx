import { Link } from "react-router-dom";
import astronaut from '../assets/astronaut.svg';

export default function MathSpace(){

  return(
    <>
    <main className='landingpage flex flex-col m-auto w-screen h-screen items-center text-center '>
      
      <h1 className="font-gugi w-11/12 mt-20 mb-60 md:mb-80 text-5xl md:text-7xl lg:text-9xl drop-shadow-5xl text-white title">MathSpace</h1>
      
      <img id='astrontaut' src={astronaut} className='absolute top-36 md:top-44 lg:left-2/3 w-5/12 md:w-1/3' alt='An astronaut floating in space among yellow stars with a yellow star in their palm'/>
      
      <Link to='/multiply'><button className="text-2xl px-7 py-5 rounded-xl md:text-4xl md:px-10 md:py-8 md:rounded-2xl bg-blue-900 font-bold text-white multiply-btn glow-on-hover">Multiply</button></Link>

    </main>
    </>
  );

}