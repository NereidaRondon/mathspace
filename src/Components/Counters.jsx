export default function Counters(props){
  
  const multiplier = props.multiplier;
  const multiplicand = props.multiplicand;

  const line = () =>{
    return(
      <div>...</div>
    );
  }
  const Counter = () =>{
    console.log(multiplier)
    
    let counters='';
    const designs = ['👽', '🚀', '⚪', '⭐', '🤖', '🪐', '🌎', '🛸' ];
    let index = Math.floor(Math.random()*8);
    console.log(index);

    let design = designs[index];
    for(let i=0; i < multiplicand; i++){
      
      counters += ` ${design} `;
    }
    
    const allRows=[];
    for(let i=1; i <= multiplier; i++){
      allRows.push([i, counters]) ;
      console.log(allRows);
    }
  
    const num2x = allRows.map((x) => {
      return(
        <div className='flex content-center justify-center items-center' key={x[0]}>
          {/* <div className='my-1 mx-2 pt-3 w-16 h-16 bg-black rounded-full text-center'>{x[0]}</div> */}
          <div className='md:p-6 m-4 w-32 h-32 md:w-48 md:h-48 border-2 border-teal-500 rounded-full text-center' >{x[1]}</div> 
        </div>
      );
    });

    return (num2x);
  }

  return(
    <section className='flex flex-row flex-wrap auto-rows-auto gap-2 justify-center p-1 mx-20 my-10 text-md sm:text-xl md:text-2xl drop-shadow-4xl text-white'>
      <Counter />
    </section>
  );

}