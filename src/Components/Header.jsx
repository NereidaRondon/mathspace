import Stars from './Stars';

export default function Header(props){

  return(
    
    <header className='header-div'    >
      <h1 className='title-div text-style' tabIndex={1}>MathSpace</h1>
      <section className='stars-div' tabIndex={2}>
        <Stars score={props.score}/>
      </section>
    </header>

  );
}