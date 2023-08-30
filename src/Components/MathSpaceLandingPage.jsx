import { Link } from "react-router-dom";
import astronaut from '../assets/astronaut.svg';

export default function MathSpace(){

  return(
    <>
    <main className='border flex flex-col m-auto w-4/5 h-screen items-center justify-center text-center '>
      
      <h1 className="font-gugi w-4/5 mb-48 drop-shadow-5xl text-white text-9xl title glow ">MathSpace</h1>
      
      <img id='astrontaut' src={astronaut} className='absolute top-1/3 left-2/3' width='500' alt='An astronaut floating among yellow stars in space with a yellow star in their palm'/>
      
      <Link to='/multiply'><button className="px-10 py-8 bg-blue-900 font-bold  text-white text-4xl rounded-2xl multiply-btn glow-on-hover">Multiply</button></Link>

    </main>
    </>
  );

}