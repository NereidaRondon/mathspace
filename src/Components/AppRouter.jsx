import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import AdditionMenu from './add/AdditionMenu';
import AddPage from './add/AddPage';
import Compare from './add/Compare';
import SkipAdd from './add/SkipAdd';
import TwoDigits from './add/TwoDigits';
import ThreeDigits from './add/ThreeDigits';
import AddMultipleChoice from './add/AddMultipleChoice';
import SubtractPage from './subtract/SubtractPage';
import MultiplyPage from './multiply/MultiplyPage';
import Complete from './Complete';

export default function AppRouter(){
  return(
    <Routes>
      <Route path="/" element={ <LandingPage /> } />

      <Route path="/additionmenu" element={ <AdditionMenu/> } />
      <Route path="/add" element={ <AddPage/> } /> 
      <Route path="/compare" element={ <Compare /> } />
      <Route path="/skipadd" element={ <SkipAdd /> } />
      <Route path="/twodigits" element={ <TwoDigits /> } />
      <Route path="/threedigits" element={ <ThreeDigits /> } />
      <Route path="/addmultiplechoice" element={ <AddMultipleChoice/> } />

      <Route path="/subtractpage" element={ <SubtractPage/> } />

      <Route path="/multiply" element={ <MultiplyPage/> } /> 

      <Route path="/complete" element={ <Complete /> } />

      <Route path="/*" element={ <LandingPage /> } />
    </Routes>
  );
}
