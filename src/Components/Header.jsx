import { Link } from 'react-router-dom';
import Stars from './Stars';

export default function Header(props){

  return(
    
    <header className='py-4 pt-24 md:pt-4'>
      
      <Link to='/'><h1 className='font-gugi text-4xl md:text-5xl w-11/12 text-center m-auto text-white drop-shadow-5xl' tabIndex={0}>{props.title}</h1></Link>
      
      <section className='flex flex-col w-10/12 m-auto justify-center text-white text-lg my-5 md:text-3xl text-center drop-shadow-4xl' tabIndex={0}>
        <Stars score={props.score}/>
      </section>
    
    </header>

  );
}