export default function BaseTen(props){

  const num1 = props.addend1;
  const num2 = props.addend2;

  let squares1 ='';
  for(let i=1; i <= num1; i++){
      squares1 += '🚀';
  } 
  let squares2 ='';
  for(let i=1; i <= num2; i++){
      squares2 += '🛸';
  } 
  
  return(
      <section className="sm:flex text-3xl md:text-4xl lg:text-5xl gap-5 lg:gap-10 min-w-min my-5 md:my-16">
        <div className="flex flex-row flex-wrap w-60 md:w-96 h-8 leading-10 mt-5 mb-32 sm:mb-5">{squares1}</div>
        <div className="flex flex-row flex-wrap w-60 md:w-96 h-8 leading-10 mt-5 ">{squares2}</div>
      </section>
  );
}