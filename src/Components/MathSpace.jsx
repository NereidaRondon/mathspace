import { Link } from "react-router-dom";
import astronaut from '../assets/astronaut.svg';

export default function MathSpace(){

  return(
    <>
    <main>
      <h1 className="title glow">MathSpace</h1>
      
      <img id='astrontaut' src={astronaut} alt='An astronaut floating among yellow stars in space with a yellow star in their palm'/>
      
      <Link to='/multiply'><button className="multiply-btn glow-on-hover">Multiply</button></Link>

    </main>
    </>
  );

}