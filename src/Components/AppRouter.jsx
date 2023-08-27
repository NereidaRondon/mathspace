import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Complete from './Complete';


export default function AppRouter(){
  return(
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/complete" element={ <Complete /> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
    </Routes>
  );

}