import { Link } from "react-router-dom";
//import astronaut from '../assets/astronaut.svg';

export default function AdditionMenu(){
  const buttonClass = 'rounded-xl md:rounded-2xl p-4 md:p-6 w-36 h-36 md:w-48 md:h-48 bg-blue-400 ';

  return(
    
    <main className='mb-40 flex flex-col m-auto w-screen h-screen items-center text-center'>
      
      <h1 className='font-gugi w-11/12 mt-20 mb-10 text-5xl md:text-7xl lg:text-9xl drop-shadow-5xl text-white'>Addition</h1>
      
      {/* <img id='astronaut' src={astronaut} className='absolute top-36 md:top-44 lg:top-40 w-5/12 md:w-2/5 lg:w-1/3 xl:w-1/4' alt='An astronaut floating in space among yellow stars with a yellow star in their palm'/> */}

      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-black text-xl md:text-3xl">

        <Link to='/add'><button className={buttonClass}>Add</button></Link>

        <Link to='/addmultiplechoice'><button className={buttonClass}>Multiple Choice Questions</button></Link>

        <Link to='/add'><button className={buttonClass}>Add</button></Link>

        <Link to='/add'><button className={buttonClass}>Add</button></Link>

        <Link to='/add'><button className={buttonClass}>Add</button></Link>

        <Link to='/add'><button className={buttonClass}>Add</button></Link>

      </section>
      

    </main>
    
  );

}