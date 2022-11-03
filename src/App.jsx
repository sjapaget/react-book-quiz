import { React, useState } from 'react';
import Start from './Start';
import Quiz from './Quiz'

function App() {

  const [quizBegun, setQuizBegun] = useState(false);

  function startQuiz() {
    setQuizBegun(prev => !prev)
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-bgBeige-500'>
      {quizBegun
        ? <Quiz />
        : <Start startQuiz={startQuiz} />
      }
    </div>
  )
}

export default App;
