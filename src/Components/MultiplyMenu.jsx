function MultiplyMenu(props){

  return(

    <section className='z-50 w-4/5 h-4/5 absolute top-28 p-8 text-3xl text-center start-modal rounded-xl'>
      <h2 className='my-8'>
        What multiplier do you want to practice?
      </h2>

      <div className='my-14 flex flex-wrap justify-center' role='radiogroup' >

      <div>
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

        <label className='ml-1 mr-8 radio-label' htmlFor='two'>2</label>
      </div>
      <div>
        <input 
          type='radio' 
          role='radio'
          aria-checked='false'
          id='three' 
          name='Multiplier' 
          value='3' 
          onClick={()=>{props.handleRadioChange(3)}} 
        />
        <label className='ml-1 mr-8 radio-label' htmlFor='three'>3</label>
      </div>
      <div>
        <input 
          type='radio' 
          role='radio'
          aria-checked='false'
          id='four' 
          name='Multiplier' 
          value='4' 
          onClick={()=>{props.handleRadioChange(4)}} 
        />    
        <label className='ml-1 mr-8 radio-label' htmlFor='four'>4</label>
      </div>
      <div>  
        <input 
          type='radio' 
          role='radio'
          aria-checked='false'
          id='five' 
          name='Multiplier' 
          value='5' 
          onClick={()=>{props.handleRadioChange(5)}} 
          />      
        <label className='ml-1 mr-8 radio-label' htmlFor='five'>5</label>
      </div>

      <div> 
        <input 
          type='radio' 
          role='radio'
          aria-checked='false'
          id='six' 
          name='Multiplier' 
          value='6' 
          onClick={()=>{props.handleRadioChange(6)}} 
          />  

        <label className='ml-1 mr-8 radio-label' htmlFor='six'>6</label>
      </div>

      <div> 
        <input 
          type='radio' 
          role='radio'
          aria-checked='false'
          id='ten' 
          name='Multiplier' 
          value='10' 
          onClick={()=>{props.handleRadioChange(10)}} 
          />  

        <label className='ml-1 mr-8 radio-label' htmlFor='ten'>10</label>
      </div>

      </div>


      <h2 className='my-20'>Let&apos;s practice the {props.multiplier} times tables!</h2>
    
      <button className='px-10 py-8 bg-blue-900 font-bold text-white text-4xl rounded-2xl drop-shadow-3xl glow-on-hover' onClick={props.start}>START</button>

    </section>
  );

}
export default MultiplyMenu;