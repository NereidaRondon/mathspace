export default function Stars(props){

  let total = props.score;
  
  const StarRender = () => {
    let stars = '';
    for(let i = 0; i < total; i++){
      stars += '⭐ ';
    }
    //console.log(stars);
    return (
      <div>{total}   {stars}</div>
    );
  }

  return(
    <><StarRender /></>
  );

}  