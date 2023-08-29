import { Link } from 'react-router-dom';
import complete from '../assets/complete.webp';

export default function Complete(){

  return(

    <main className="flex complete-div w-screen h-screen m-auto items-center">
      <Link to='/'> <img src={complete} className="m-auto justify-self-center 

place-self-center complete-img w-4/5 max-h-screen " alt="Click to go back to the Main menu." width={600} /></Link>
    
    </main>
    
  );
}