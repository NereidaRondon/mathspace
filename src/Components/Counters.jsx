export default function Counters(props){
  
  const multiplier = props.multiplier;
  const multiplicand = props.multiplicand;
  
  const Counter = () =>{
    console.log(multiplier);
    
    let counters = '';
    
    for(let j=0; j < multiplicand; j++){
      
      counters += ` ${props.design} `;
    }
    
    const allRows=[];
    for(let i=1; i <= multiplier; i++){
      allRows.push([i, counters]) ;
    }
  
    const groups = allRows.map((x) => {
      return(
        <section className='flex flex-wrap flex-row content-center justify-center items-center' key={x[0]}>
          <div className='flex flex-wrap text-sm md:text-2xl lg:text-3xl w-16 h-32 md:w-48 md:h-48 border-2 border-teal-500 rounded-xl md:rounded-full text-center content-center justify-center' >
            {x[1]}
          </div> 
        </section>
      );
    });

    return (groups);
  }

  return(
    <section className='w-11/12 md:w-11/12 flex flex-row flex-wrap auto-rows-auto gap-y-6 gap-x-4 p-1 my-2 drop-shadow-4xl text-white content-center justify-center items-center'>
      <Counter />
    </section>
  );

}