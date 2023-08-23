import Stars from './Stars';

export default function Header(props){

  return(
    
    <div className='header-div'>
      <h1 className='title-div text-style'>MathSpace</h1>
      <div className='stars-div'>
        <Stars score={props.score}/>
      </div>
    </div>

  );
}