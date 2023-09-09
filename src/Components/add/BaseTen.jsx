export default function BaseTen(props){

  const num1 = props.addend1;
  const num2 = props.addend2;

  let squares1 ='';
  for(let i=0; i < num1; i++){
    squares1 += '🟪 ';
  
  } 
  let squares2 ='';
  for(let i=0; i < num2; i++){
    squares2 += '🟧 ';
  
  } 
  
  return(
      <section className="flex text-sm gap-6 my-5">
        <div className="flex flex-row flex-wrap m-auto w-60 h-6 leading-6">{squares1}</div>
        <div className="flex flex-row flex-wrap m-auto w-60 h-6 leading-6">{squares2}</div>
      </section>
  );
}