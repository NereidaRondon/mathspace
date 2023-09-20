import HomeButton from "../HomeButton";

export default function TwoDigits(){
  return(
    <main className='text-white flex-auto'>
      <HomeButton />
      <h2 className='font-gugi text-5xl text-center mt-5 m-auto w-4/5'>Column Addition with Two Digits</h2> 

      <section className="border border-yellow-400 flex flex-nowrap mx-auto mt-16 text-6xl text-end leading-20 w-56">
        <div className="border border-red-700 m-auto text-6xl text-end leading-20 grid grid-cols-3">

          <div className=" w-12 h-16"></div>
          <div className="border w-12 h-16">1</div>
          <div className="w-12 h-16"></div>
          <div className="w-12 h-16"></div>
          <div className="w-12 h-16">5</div>
          <div className="w-12 h-16">6</div>
          <div className="w-12 h-16 text-center">+</div>
          <div className="w-12 h-16">8</div>
          <div className="w-12 h-16">9</div>
          <div className="my-1 bg-teal-300 w-14 h-2"></div>
          <div className="my-1 bg-teal-300 w-14 h-2"></div>
          <div className="my-1 bg-teal-300 w-14 h-2"></div>
          <div className="border w-12 h-16">1</div>
          <div className="border w-12 h-16">4</div>
          <div className="border w-12 h-16">5</div>
        
        </div>
      </section>
    </main>
  );
} 