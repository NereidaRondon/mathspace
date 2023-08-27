import { Link } from "react-router-dom";
import complete from '../assets/complete.svg';

export default function Complete(){

  return(

    <div className="complete-modal">
      <Link to='/'> <img src={complete} className="complete-img"  /></Link>
    
      <h2 className='complete-title'>Well Done!</h2>
    </div>
    
  );
}