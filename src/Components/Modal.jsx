export default function Modal(props){

  return(

    <div className='start-modal'>
      <h2>
        Choose which multiples to practice?
      </h2>
      <input type='radio' id='two' name='multiplier' value='2' onClick={props.handleMultiplier2}/>
      <label className='radio-label' htmlFor='two'>2</label>

      <input type='radio' id='three' name='multiplier' value='3'onClick={props.handleMultiplier3}/>
      <label className='radio-label' htmlFor='three'>3</label>

      <input type='radio' id='four' name='multiplier' value='4'onClick={props.handleMultiplier4}/>
      <label className='radio-label' htmlFor='four'>4</label>

      <input type='radio' id='five' name='multiplier' value='5'onClick={props.handleMultiplier5}/>
      <label className='radio-label' htmlFor='five'>5</label>

      <input type='radio' id='ten' name='multiplier' value='10'onClick={props.handleMultiplier10}/>
      <label className='radio-label' htmlFor='ten'>10</label>

      <br></br>
      <br></br>
      <br></br>
      <h2>Let&apos;s practice the {props.multiplier} times tables!</h2>
      <br></br>
      <button onClick={props.start}>START</button>

    </div>
  );

}