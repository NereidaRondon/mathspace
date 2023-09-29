import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import NumbersMenu from './numbers/NumbersMenu';
import Compare from './numbers/Compare';
import AdditionMenu from './add/AdditionMenu';
import Add_1_5 from './add/Add1-5';
import Add_1_9 from './add/Add1-9';
import Add_1_35 from './add/Add1-35';
import TwoDigits_1_15 from './add/TwoDigits1-15';
import TwoDigits_10_49 from './add/TwoDigits10-49';
import TwoDigits_30_99 from './add/TwoDigits30-99';
//import ThreeDigits from './add/ThreeDigits';
import AddMultipleChoice from './add/AddMultipleChoice';
import SubtractPage from './subtract/SubtractPage';
import MultiplyPage from './multiply/MultiplyPage';
import Complete from './Complete';

export default function AppRouter(){
  return(
    <Routes>
      <Route path="/" element={ <LandingPage /> } />

      <Route path="/numbersmenu" element={ <NumbersMenu /> } />
      <Route path="/compare" element={ <Compare /> } />
      <Route path="/additionmenu" element={ <AdditionMenu /> } />
      <Route path="/add_1_5" element={ <Add_1_5 /> } />
      <Route path="/add_1_9" element={ <Add_1_9 /> } /> 
      <Route path="/add_1_35" element={ <Add_1_35 /> } />
      <Route path="/twodigits_1_15" element={ <TwoDigits_1_15 /> } /> 
      <Route path="/twodigits_10_49" element={ <TwoDigits_10_49 /> } />  
      <Route path="/twodigits_30_99" element={ <TwoDigits_30_99 /> } />  
      {/* <Route path="/threedigits" element={ <ThreeDigits /> } /> */}
      <Route path="/addmultiplechoice" element={ <AddMultipleChoice /> } />

      <Route path="/subtractpage" element={ <SubtractPage /> } />

      <Route path="/multiply" element={ <MultiplyPage/> } /> 

      <Route path="/complete" element={ <Complete /> } />

      <Route path="/*" element={ <LandingPage /> } />
    </Routes>
  );
}
