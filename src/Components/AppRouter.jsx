import { Routes, Route } from "react-router-dom"
import MathSpace from './MathSpace';
import Multiply from './Multiply';
import Complete from './Complete';


export default function AppRouter(){
  return(
    <Routes>
        <Route path="/" element={ <MathSpace /> } />
        <Route path="/multiply" element={ <Multiply/> } /> 
        <Route path="/complete" element={ <Complete /> }/>
    </Routes>
  );

}