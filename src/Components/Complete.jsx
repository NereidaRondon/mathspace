import complete from '../assets/complete.svg';

export default function Complete(){

  return(

    <div className="complete-modal">
      <img src={complete} className="complete-img"  />
    
      <h2 className='complete-title'>Well Done!</h2>
    </div>
    
  );
}