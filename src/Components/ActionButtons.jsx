//import { Link , useNavigate} from "react-router-dom";

export default function ActionButtons(props){
  let showCCBtn = props.showCheckClearBtn;
  let showNext = props.showNextBtn;
  let exit = props.showExitBtn;

  return(
    <section className='flex flex-wrap justify-around'>
      
      <div className='flex flex-wrap'>
        {showCCBtn && <button onClick={props.check} className='border border-green-300 text-3xl w-15 h-15 sm:w-20 sm:h-20 px-1 py-1 m-2 sm:px-2 sm:py-5 sm:m-4 bg-green-500 rounded-full text-center'>✅</button>}

        {showNext && <button onClick={props.next} className='border border-blue-300 text-3xl w-15 h-15 sm:w-20 sm:h-20 px-1 py-1 m-2 sm:px-2 sm:py-5 sm:m-4 bg-sky-500 rounded-full text-center'>➡️</button>}

        {exit && <button onClick={props.exit} className='border border-teal-900 text-3xl w-36 px-2 py-5 m-4 bg-teal-300 text-black rounded-xl text-center'>Exit</button>}
      </div>

      <div>
        {showCCBtn && <button onClick={props.clear} className='border border-teal-400 text-3xl w-15 h-15 sm:w-20 sm:h-20 px-1 py-1 m-2 sm:px-2 sm:py-5 sm:m-4 bg-sky-500 rounded-full'>🔄</button>}
      </div>
        
    </section>
  );
}