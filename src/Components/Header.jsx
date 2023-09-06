import { Link } from 'react-router-dom';
import Stars from './Stars';

export default function Header(props){

  return(
    
    <header className='py-4'>
      
      <Link to='/'><h1 className='font-gugi text-4xl md:text-5xl w-11/12 text-center m-auto text-white drop-shadow-5xl' tabIndex={0}>MathSpace</h1></Link>
      
      <section className='text-white text-lg my-2 md:text-3xl text-center drop-shadow-4xl' tabIndex={0}>
        <Stars score={props.score}/>
      </section>
    
    </header>

  );
}