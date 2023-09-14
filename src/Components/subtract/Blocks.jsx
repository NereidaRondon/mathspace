export default function BaseTen(props){

  const num1 = props.addend1;
  const num2 = props.addend2;
  const diff = props.addend1 - props.addend2;

  let bells = '';

  for (let i=1; i<=num1; i++){
    
    if(i<=diff){

      if(i%10===0){
        bells += '👾 10';
      } else if(i===num1){
        bells += '👾 '+ num1%10;
      } else {
        bells += '👾';
      }
    }else{
      if(i%10===0){
        bells += '💥 10';
      } else if(i===num1){
        bells += '💥 '+ num1%10;
      } else {
        bells += '💥';
      }
    }
  }

  
  return(
      <section className="sm:flex text-base md:text-2xl gap-6 min-w-min my-5">
        <div className="flex flex-row flex-wrap w-64 md:w-96 h-8 leading-10 mt-5 mb-32 sm:mb-5 ">{bells}</div>
        {/* <div className="flex flex-row flex-wrap w-64 md:w-96 h-8 leading-10 mt-5 ">{squares2}</div> */}
      </section>
  );
}