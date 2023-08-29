import { Link } from "react-router-dom";
import astronaut from '../assets/astronaut.svg';

export default function MathSpace(){

  return(
    <>
    <main className='flex-col w-screen h-screen items-center justify-center text-center '>
      <h1 className="my-48 drop-shadow-3xl text-white text-9xl title glow ">MathSpace</h1>
      
      <img id='astrontaut' src={astronaut} alt='An astronaut floating among yellow stars in space with a yellow star in their palm'/>
      
      <Link to='/multiply'><button className="px-10 py-8 bg-blue-900 font-bold  text-white text-4xl rounded-2xl multiply-btn glow-on-hover">Multiply</button></Link>

    </main>
    </>
  );

}