import { Link } from 'react-router-dom';
import complete from '../assets/complete.webp';

export default function Complete(){

  return(

    <main className="complete-div">
      <Link to='/'> <img src={complete} className="complete-img" alt="Click to go back to the Main menu." width={600} /></Link>
    
    </main>
    
  );
}