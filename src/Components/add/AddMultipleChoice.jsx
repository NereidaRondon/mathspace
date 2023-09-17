import HomeButton from "../HomeButton";

export default function AddMultipleChoice(){

  const questionBank = [

    {
      prompt: 'Which of the following equations represents the total number of circles in the figure below?',
      class: '',
      img: '🔴🔴🔴🔴🔴🔴🔴 +  🟢🟢🟢🟢🟢',
      choiceA: '10',
      choiceB: '7',
      choiceC: '2',
      choiceD: '12',
      answer: 'D'
    },
    {
      prompt: 'Find the value of 3 hundreds, 2 tens and 4 ones?',
      class: '',
      img: '',
      choiceA: '9',
      choiceB: '324',
      choiceC: '423',
      choiceD: '320',
      answer: 'B'
    },
    {
      prompt: 'Find 7 + 1 + 5',
      class: '',
      img: '',
      choiceA: '11',
      choiceB: '10',
      choiceC: '13',
      choiceD: '12',
      answer: 'C'
    },
    {
      prompt: 'What is the place value of the number 8 in 598?',
      class: '',
      img: '',
      choiceA: 'thousands',
      choiceB: 'ones',
      choiceC: 'hundreds',
      choiceD: 'tens',
      answer: 'B'
    },
    {
      prompt: 'What number is missing? 5 + ? = 9',
      class: '',
      img: '',
      choiceA: '13',
      choiceB: '5',
      choiceC: '4',
      choiceD: '7',
      answer: 'C'
    },
    {
      prompt: '12 - 9 = ?',
      class: '',
      img: '🔔🔔🔔🔕🔕🔕🔕🔕🔕🔕🔕🔕',
      choiceA: '21',
      choiceB: '3',
      choiceC: '9',
      choiceD: '12',
      answer: 'B'
    },
    {
      prompt: 'What is the next number? 2, 4, 6, 8, 10, 12, _?_',
      class: '',
      img: '',
      choiceA: '13',
      choiceB: '4',
      choiceC: '2',
      choiceD: '14',
      answer: 'D'
    }
    // {
    //   prompt: '',
    //   class: '',
    //   img: '😁',
    //   choiceA: '',
    //   choiceB: '',
    //   choiceC: '',
    //   choiceD: '',
    //   answer: ''
    // },
    // {
    //   prompt: '',
    //   class: '',
    //   img: '😁',
    //   choiceA: '',
    //   choiceB: '',
    //   choiceC: '',
    //   choiceD: '',
    //   answer: ''
    // },
    // {
    //   prompt: '',
    //   class: '',
    //   img: '😁',
    //   choiceA: '',
    //   choiceB: '',
    //   choiceC: '',
    //   choiceD: '',
    //   answer: ''
    // },
    // {
    //   prompt: 'Which of the following equations represents the total number of circles in the figure below?',
    //   img: '😁',
    //   class: '',
    //   choiceA: '',
    //   choiceB: '',
    //   choiceC: '',
    //   choiceD: '',
    //   answer: ''
    // },
  ]
  const questionData = questionBank.map((question) =>{
    return(
      <div key={prompt}>
      
        <h2 key={question.prompt} className={question.class}>{question.prompt}</h2>
      
        <div>{question.img}</div>
        
        <ul>
          <li>A. {question.choiceA}</li>
          <li>B. {question.choiceB}</li>
          <li>C. {question.choiceC}</li>
          <li>D. {question.choiceD}</li>
        </ul>

      </div>
    ); 
  });
  




  return(
    <main className='text-white'>
      <HomeButton />

      <h2 className='font-gugi text-5xl text-center mt-5'>Multiple Choice</h2> 

      {/* <section>
        {questionData}
      </section> */}

    </main>
  );
}