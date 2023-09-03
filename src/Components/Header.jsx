import Stars from './Stars';

export default function Header(props){

  return(
    
    <header className='py-3'    >
      
      <h1 className='font-gugi text-5xl py-2 text-center text-white drop-shadow-5xl' tabIndex={0}>MathSpace</h1>
      
      <section className='text-white my-2 text-3xl text-center drop-shadow-4xl' tabIndex={0}>
        <Stars score={props.score}/>
      </section>
    
    </header>

  );
}