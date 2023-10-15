import { Link } from 'react-router-dom';
import rocket from '../assets/mathspace-logo.webp';

export default function HomeButton(){
  return(      
       <Link to='/'> 
         <img src={rocket} className='rocket absolute top-3 md:top-5 left-3 md:left-5  md:w-15 h-15 md:h-50 transition-all' alt='Back to Home Page'/>
       </Link>
  );
}  