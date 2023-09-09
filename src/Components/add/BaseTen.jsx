export default function BaseTen(props){

  const num1 = props.addend1;
  const num2 = props.addend2;

  let squares1 ='';
  for(let i=1; i <= num1; i++){
    if(i%10===0){
      squares1 += '🟪 10';
    } else if(i===num1){
      squares1 += '🟪 '+ num1%10;
    } else {
      squares1 += '🟪';
    }
  } 
  let squares2 ='';
  for(let i=1; i <= num2; i++){
    if(i%10===0){
      squares2 += '🟧 10';
    } else if(i===num2){
      squares2 += '🟧 '+ num2%10;
    } else {
      squares2 += '🟧';
    }
  } 
  
  return(
      <section className="sm:flex text-base md:text-2xl gap-6 min-w-min my-5">
        <div className="flex flex-row flex-wrap w-64 md:w-96 h-8 leading-10 mt-5 mb-32 sm:mb-5 ">{squares1}</div>
        <div className="flex flex-row flex-wrap w-64 md:w-96 h-8 leading-10 mt-5 ">{squares2}</div>
      </section>
  );
}