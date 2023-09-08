import { Routes, Route } from "react-router-dom"
import MathSpaceLandingPage from './MathSpaceLandingPage';
import Multiply from './Multiply';
import Complete from './Complete';


export default function AppRouter(){
  return(
    <Routes>
        <Route path="/" element={ <MathSpaceLandingPage /> } />
        <Route path="/multiply" element={ <Multiply/> } /> 
        <Route path="/complete" element={ <Complete /> }/>
        <Route path="/*" element={ <MathSpaceLandingPage /> }/>
    </Routes>
  );

}