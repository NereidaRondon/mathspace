export default function BaseTen(props){

  const num1 = props.addend1;
  const num2 = props.addend2;

  let squares1 ='';
  for(let i=1; i <= num1; i++){
      squares1 += ' 👽 ';
  } 
  let squares2 ='';
  for(let i=1; i <= num2; i++){
      squares2 += ' 🛸 ';
  } 
  
  return(
      <section className="md:flex text-3xl md:text-4xl lg:text-5xl gap-5 lg:gap-10 min-w-min my-5 md:my-16 text-center justify-items-center content-center">
        <div className="flex flex-row flex-wrap w-full sm:w-64 md:w-48 lg:w-52 h-10 lg:h-32 leading-10 lg:leading-20 mb-10">{squares1}</div>
        <div className="flex flex-row flex-wrap w-full sm:w-64 md:w-48 h-10 lg:h-32 leading-10 lg:leading-20">{squares2}</div>
      </section>
  );
}