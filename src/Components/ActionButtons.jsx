//import { Link , useNavigate} from "react-router-dom";

export default function ActionButtons(props){
  let showCCBtn = props.showCheckClearBtn;
  let showNext = props.showNextBtn;
  let exit = props.showExitBtn;

  return(

    <section className=' pr-10'>
      <div>
        {showCCBtn && <button onClick={props.check} className='text-4xl px-6 py-4 bg-green-700 w-36 my-5 rounded-lg'> Check </button>}

        {showNext && <button onClick={props.next} className='text-4xl px-6 py-4 bg-blue-900 w-36 my-5 rounded-lg'> Next </button>}

        {exit && <button onClick={props.exit} className='text-4xl px-6 py-4 bg-emerald-950 w-36 my-5 rounded-lg'>Exit</button>}
      </div>

      <div>
        {showCCBtn && <button onClick={props.clear} className='text-4xl px-6 py-4 bg-slate-950 w-36 my-5 rounded-lg'> Clear </button>}
      </div>
        
    </section>

  );
}