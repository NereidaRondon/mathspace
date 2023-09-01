//import { Link , useNavigate} from "react-router-dom";

export default function ActionButtons(props){
  let showCCBtn = props.showCheckClearBtn;
  let showNext = props.showNextBtn;
  let exit = props.showExitBtn;

  return(
    <section className='flex flex-wrap justify-around h-60 w-60'>
      
      <div className='flex flex-wrap'>
        {showCCBtn && <button onClick={props.check} className='border border-green-300 text-3xl w-36 px-2 py-5 my-4 bg-green-700 rounded-xl mx-auto text-center'>Check</button>}

        {showNext && <button onClick={props.next} className='border border-blue-300 text-3xl w-36 px-2 py-5 my-20 bg-blue-900 rounded-xl text-center'>Next</button>}

        {exit && <button onClick={props.exit} className='border border-teal-900 text-3xl w-36 px-2 py-5 my-20 bg-teal-300 text-black rounded-xl text-center'>Exit</button>}
      </div>

      <div>
        {showCCBtn && <button onClick={props.clear} className='border border-teal-400 text-3xl w-36 px-2 py-6 my-4 bg-slate-950 rounded-xl'>Clear</button>}
      </div>
        
    </section>
  );
}