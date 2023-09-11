import { Link } from "react-router-dom";
import astronaut from '../assets/astronaut.svg';

export default function MathSpace(){
  const buttonClass = 'rounded-xl md:rounded-2xl text-2xl md:text-4xl mx-4 lg:mx-10 my-16 py-4 md:py-6 w-36 md:w-48 font-bold text-white btn-animation glow-on-hover';

  return(
    <>
    <main className='landingpage flex flex-col m-auto w-screen h-screen items-center text-center '>
      
      <h1 className="font-gugi w-11/12 mt-20 mb-60 md:mb-80 text-5xl md:text-7xl lg:text-9xl drop-shadow-5xl text-white title">MathSpace</h1>
      
      <img id='astronaut' src={astronaut} className='absolute top-36 md:top-44 lg:top-40 w-5/12 md:w-2/5 lg:w-1/3 xl:w-1/4' alt='An astronaut floating in space among yellow stars with a yellow star in their palm'/>

      <section className="lg:mt-10">
        <Link to='/additionmenu'><button className={buttonClass}>Add</button></Link>

        <Link to='/multiply'><button className={buttonClass}>Multiply</button></Link>
      </section>
      

    </main>
    </>
  );

}