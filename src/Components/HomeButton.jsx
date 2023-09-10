import { Link } from 'react-router-dom';
import house from '../assets/fa-house-solid.svg';

export default function HomeButton(){
  return(      
       <Link to='/'> 
         <img src={house} className='fa-house absolute top-3 md:top-5 left-3 md:left-5 w-8 md:w-10 h-8 md:h-10' alt='Back to Home Page'/>
       </Link>
  );
}  