import { useEffect, useState } from "react";

export default function ActionButtons(props){
  
  let show = props.showNextBtn;
  let hide = !(props.showNextBtn)
  


  return(

    <div>
      <div>
         {hide && <button onClick={props.check}> Check </button>}

        {show && <button onClick={props.next}> Next </button>}
      </div>

      <div>
        {hide && <button onClick={props.clear}> Clear </button>}
      </div>
        
    
    </div>

  );
}