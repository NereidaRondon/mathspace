import { useState } from 'react';

export default function Counters(props){
  
  const multiplier = props.multiplier;
  const multiplicand = props.multiplicand;
  
  const Counter = () =>{
    console.log(multiplier);
    let counters = '';
    const designs = ['👽', '🚀', '⚪', '⭐', '🤖', '🪐', '🌎', '🛸' ];
    let index = Math.floor(Math.random()*8);
    let design = designs[index];
    //const [design, setDesign] = useState('');
    console.log(index);
    

    for(let j=0; j < multiplicand; j++){
      
      counters += ` ${design} `;
    }
    
    const allRows=[];
    for(let i=1; i <= multiplier; i++){
      allRows.push([i, counters]) ;
    }
  
    const groups = allRows.map((x) => {
      return(
        <div className='flex flex-wrap content-center justify-center items-center' key={x[0]}>
          {/* <div className='my-1 mx-2 pt-3 w-16 h-16 bg-black rounded-full text-center'>{x[0]}</div> */}
          <div className='flex flex-wrap p-3 sm:p-6 m-2 sm:m-4 w-32 h-32 sm:w-48 sm:h-48 border-2 border-teal-500 rounded-full text-center content-center justify-center' >{x[1]}</div> 
        </div>
      );
    });

    return (groups);
  }

  return(
    <section className='flex flex-row flex-wrap auto-rows-auto gap-2 justify-center p-1 mx-20 my-10 text-md sm:text-xl md:text-2xl drop-shadow-4xl text-white'>
      <Counter />
    </section>
  );

}