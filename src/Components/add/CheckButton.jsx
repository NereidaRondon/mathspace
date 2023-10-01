import checksolid from '../../assets/check-solid.svg';

export default function ActionButtons(props){

  let showCheckBtn = props.showCheckBtn;

  return(

    <section id="btn-div" className="flex justify-center m-auto w-24 h-24 my-10">

      {showCheckBtn && <button onClick={props.handleCheck} className='border border-green-300 text-2xl w-16 h-16 md:w-20 md:h-20 px-1 py-1 m-2 bg-green-500 rounded-full text-center'><img src={checksolid} className='w-12 h-12 text-center m-auto'/></button>}
        
    </section>

  );
}      