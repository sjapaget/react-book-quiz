import { React, useState } from 'react';
import Start from './Start';
import Quiz from './Quiz'

function App() {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-bgBeige-500'>
      <Quiz />
    </div>
  )
}

export default App;
