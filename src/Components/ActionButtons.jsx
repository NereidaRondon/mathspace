import { Link } from "react-router-dom";

export default function ActionButtons(props){
  let showCCBtn = props.showCheckClearBtn;
  let showNext = props.showNextBtn;
  let done = props.showDoneBtn;
  
  return(

    <div className="btn-div">
      <div>
        {showCCBtn && <button onClick={props.check}> Check </button>}

        {showNext && <button onClick={props.next}> Next </button>}

        {done && <Link to='/complete'><button>Done</button></Link>}
      </div>

      <div>
        {showCCBtn && <button onClick={props.clear}> Clear </button>}
      </div>
        
    </div>

  );
}