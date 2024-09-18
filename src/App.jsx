import Navbar from './components/Navbar';
import Hero from './components/hero';
import Highlight from './components/Highlight';
import { useState } from 'react';
import Cursor from './components/Cursor';

import './App.css';

const App = () => {
const [scaling, setscaling] = useState(false);

  return (
    <>
      <main classname="bg-black">
      <Cursor scaling={scaling} />
       <Navbar/>
       <Hero/>
       <Highlight/>

      </main>
    </>
  )
}

export default App
