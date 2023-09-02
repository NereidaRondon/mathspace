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
    for(let i=0; i < multiplicand; i++){
      counters += '⚪ ';
    }
    
    const allRows=[];
    for(let i=1; i <= multiplier; i++){
      allRows.push([i, counters]) ;
      console.log(allRows);
    }
  
    const num2x = allRows.map((x) => {
      return(
        <div className='flex' id={x.key}>
          {/* <div className='my-1 mx-2 pt-3 w-16 h-16 bg-black rounded-full text-center'>{x[0]}</div> */}
          <div className='m-1 p-7 w-40 h-40 border-2 border-teal-500 rounded-full text-center' > {x[1]}</div> 
        </div>
      );
    });

    return (num2x);
  }

  return(
    <section className='flex flex-row flex-wrap gap-2 p-1 mx-20 my-10 text-1xl drop-shadow-4xl text-white'>
      <Counter />
    </section>
  );

}