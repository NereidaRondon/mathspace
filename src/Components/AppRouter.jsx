import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import AdditionMenu from './add/AdditionMenu';
import AddPage from './add/AddPage';
import AddMultipleChoice from './add/AddMultipleChoice';
import MultiplyPage from './multiply/MultiplyPage';
import Complete from './Complete';

export default function AppRouter(){
  return(
    <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/additionmenu" element={ <AdditionMenu/> } />
      <Route path="/add" element={ <AddPage/> } /> 
      <Route path="/addmultiplechoice" element={ <AddMultipleChoice/> } />
      <Route path="/multiply" element={ <MultiplyPage/> } /> 
      <Route path="/complete" element={ <Complete /> } />
      <Route path="/*" element={ <LandingPage /> } />
    </Routes>
  );
}