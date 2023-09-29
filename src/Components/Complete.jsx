import { Link, useNavigate } from 'react-router-dom';
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import complete from '../assets/complete.webp';

export default function Complete(){

  const navigate = useNavigate();

  const handleToMainMenu=()=>{
    confetti.reset();
    navigate('/');
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      console.log("Return to main menu!");
      confetti.reset();
      handleToMainMenu();
    } 
  }

  var duration = 1500;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);

  return(

    <main className="complete-page flex w-screen justify-center h-screen m-auto items-center">
      
      <Link to='/'> <img src={complete} className='m-auto rounded-2xl md:rounded-3xl drop-shadow-4xl complete-img w-11/12 md:w-4/5 max-h-screen ' 
      alt="Click to go back to the Main menu." width={600} onKeyDown={handleKeyDown}/></Link>
    
    </main>
    
  );
}