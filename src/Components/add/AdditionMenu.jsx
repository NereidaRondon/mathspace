import { Link } from "react-router-dom";
import HomeButton from "../HomeButton";

export default function AdditionMenu(){
  const buttonClass = 'rounded-xl md:rounded-2xl p-4 md:p-6 w-36 h-36 md:w-48 md:h-48 bg-blue-400 transition-transform hover:scale-105';

  return(
    <main className='mb-40 flex flex-col m-auto w-screen h-screen items-center text-center'>
      
      <HomeButton />
      
      <h1 className='font-gugi w-11/12 mt-20 mb-10 text-5xl md:text-7xl lg:text-9xl drop-shadow-5xl text-white'>Addition</h1>
    
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-black text-lg md:text-2xl">

        <Link to='/add_1_5'><button className={buttonClass}>Add Numbers<p>from 1-5</p></button></Link>

        <Link to='/add_1_9'><button className={buttonClass}>Add Numbers<p>from 1-9</p></button></Link>

        <Link to='/add_1_35'><button className={buttonClass}>Add Numbers<p>from 1-35</p></button></Link>

        <Link to='/twodigits'><button className={buttonClass}>Column Addition<p>2 digits 🚧</p></button></Link>

        <Link to='/threedigits'><button className={buttonClass}>Column Addition<p>3 digits 🚧</p></button></Link>

        <Link to='/addmultiplechoice'><button className={buttonClass}>Multiple Choice Questions 🚧</button></Link>

      </section>
      

    </main>
    
  );

}