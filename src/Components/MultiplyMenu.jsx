
function MultiplyMenu(props){

 
  return(

    <section className='absolute top-0 p-10 w-screen h-screen text-5xl text-center start-modal'>
      <h2 className='my-8'>
        What multiplier do you want to practice?
      </h2>

      <div className='my-12' role='radiogroup' >

      <input 
        className=''
        type='radio' 
        role='radio'
        aria-checked='false'
        id='two' 
        name='Multiplier' 
        value='2' 
        onClick={()=>{props.handleRadioChange(2)}}         
      />

      <label className='mr-12 radio-label' htmlFor='two'>2</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='three' 
        name='Multiplier' 
        value='3' 
        onClick={()=>{props.handleRadioChange(3)}} 
      />
      <label className='mr-12 radio-label' htmlFor='three'>3</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='four' 
        name='Multiplier' 
        value='4' 
        onClick={()=>{props.handleRadioChange(4)}} 
      />    
      <label className='mr-12 radio-label' htmlFor='four'>4</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='five' 
        name='Multiplier' 
        value='5' 
       onClick={()=>{props.handleRadioChange(5)}} 
      />      
      <label className='mr-12 radio-label' htmlFor='five'>5</label>

      <input 
        type='radio' 
        role='radio'
        aria-checked='false'
        id='ten' 
        name='Multiplier' 
        value='10' 
        onClick={()=>{props.handleRadioChange(10)}} 
      />  

      <label className='mr-12 radio-label' htmlFor='ten'>10</label>

      </div>


      <h2 className='my-20'>Let&apos;s practice the {props.multiplier} times tables!</h2>
    
      <button className='my-20 px-10 py-8 bg-blue-900 font-bold text-white text-4xl rounded-2xl drop-shadow-3xl' onClick={props.start}>START</button>

    </section>
  );

}
export default MultiplyMenu;