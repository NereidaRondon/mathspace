//import { Link , useNavigate} from "react-router-dom";

export default function ActionButtons(props){
  let showCCBtn = props.showCheckClearBtn;
  let showNext = props.showNextBtn;
  let exit = props.showExitBtn;

  return(
    <div className='flex flex-wrap justify-around w-48 md:w-72 py-1'>
      
      <div className=''>
        {showCCBtn && <button onClick={props.clear} className='border border-teal-100 text-2xl text-black w-20 h-16 md:h-20 px-2 m-2 bg-sky-500 rounded-full'>clear</button>}
      </div>

      <div className='flex flex-wrap w-25'>
        {showCCBtn && <button onClick={props.check} className='border border-green-300 text-2xl w-16 h-16 md:w-20 md:h-20 px-1 py-1 m-2 bg-green-500 rounded-full text-center'>✔️</button>}

        {showNext && <button onClick={props.next} className='border border-blue-300 text-3xl w-16 h-16 md:w-20 md:h-20 px-1 py-1 m-2 bg-sky-500 rounded-full text-center'>➡️</button>}

        {exit && <button onClick={props.exit} className='border border-teal-900 text-3xl w-36 px-2 py-5 m-4 bg-teal-300 text-black rounded-xl text-center'>Exit</button>}
      </div>

        
    </div>
  );
}