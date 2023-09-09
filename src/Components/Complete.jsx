import { Link, useNavigate } from 'react-router-dom';
import complete from '../assets/complete.webp';

export default function Complete(){

  const navigate = useNavigate();

  const handleToMainMenu=()=>{
    navigate('/');
  }

    const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      console.log("Return to main menu!");
      handleToMainMenu();
    }
     
  }
  return(

    <main className="complete-page flex w-screen justify-center h-screen m-auto items-center">
      
      <Link to='/'> <img src={complete} className='m-auto rounded-2xl md:rounded-3xl drop-shadow-4xl complete-img w-11/12 md:w-4/5 max-h-screen ' 
      alt="Click to go back to the Main menu." width={600} onKeyDown={handleKeyDown}/></Link>
    
    </main>
    
  );
}