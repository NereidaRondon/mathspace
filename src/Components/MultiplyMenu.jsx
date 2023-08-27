
function MultiplyMenu(props){

 
  return(

    <div className='start-modal'>
      <h2>
        What multiplier do you want to practice?
      </h2>

      <div role='radiogroup' >

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='two' 
        name='multiplier' 
        value='2' 
        onClick={()=>{props.handleRadioChange(2)}}         
      />

      <label className='radio-label' htmlFor='two'>2</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='three' 
        name='multiplier' 
        value='3' 
        onClick={()=>{props.handleRadioChange(3)}} 
      />
      <label className='radio-label' htmlFor='three'>3</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='four' 
        name='multiplier' 
        value='4' 
        onClick={()=>{props.handleRadioChange(4)}} 
      />    
      <label className='radio-label' htmlFor='four'>4</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='five' 
        name='multiplier' 
        value='5' 
       onClick={()=>{props.handleRadioChange(5)}} 
      />      
      <label className='radio-label' htmlFor='five'>5</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='ten' 
        name='multiplier' 
        value='10' 
        onClick={()=>{props.handleRadioChange(10)}} 
      />  

      <label className='radio-label' htmlFor='ten'>10</label>

      </div>


      <h2>Let&apos;s practice the {props.multiplier} times tables!</h2>
    
      <button onClick={props.start}>START</button>

    </div>
  );

}
export default MultiplyMenu;