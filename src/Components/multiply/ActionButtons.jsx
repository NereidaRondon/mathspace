//import { Link , useNavigate} from "react-router-dom";
import check from '../../assets/check-solid.svg';
import arrow from '../../assets/arrow-right-solid.svg';

export default function ActionButtons(props){
  let showCheckBtn = props.showCheckBtn;
  let showClearBtn = props.showClearBtn;
  let showNext = props.showNextBtn;
  let exit = props.showExitBtn;

  return(
    <div className='flex flex-wrap justify-around w-48 md:w-72 py-1'>
      
      <div className='w-24 h-24'>
        {showClearBtn && <button onClick={props.clear} className='border border-teal-100 text-xl md:text-3xl text-black w-16 h-16 md:w-20 md:h-20 px-1 py-1 m-2 bg-sky-500 rounded-full font-bold'>clear</button>}
      </div>

      <div className='flex flex-wrap w-24'>
        {showCheckBtn && <button onClick={props.check} className='border border-green-300 text-2xl w-16 h-16 md:w-20 md:h-20 px-1 py-1 m-2 bg-green-500 rounded-full text-center'><img src={check} className='w-12 h-12 text-center m-auto'/></button>}

        {showNext && <button onClick={props.next} className='border border-blue-300 text-3xl w-16 h-16 md:w-20 md:h-20 px-1 py-1 m-2 bg-sky-500 rounded-full text-center'>
          <img src={arrow} className='w-12 h-12 text-center m-auto'/></button>}

        {exit && <button onClick={props.exit} className='border border-teal-900 text-2xl md:text-3xl w-16 h-16 md:w-20 md:h-20 px-2 py-1 m-2 bg-teal-300 text-black rounded-full text-center font-bold'>Exit</button>}
      </div>

        
    </div>
  );
}