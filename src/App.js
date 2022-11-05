import React from 'react';
import  Home  from './component/Home';
import Counter from './component/Counter';
import { Routes, Route, Link } from 'react-router-dom';
import CountReducer from './component/CountReducer';
import { Error404 } from './component/Error404';
import ErrorBoundary from './component/ErrorBoundary';
import Test from './component/Test';

// import React, { useReducer} from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'



function App() {  
  return (

   <>
<ErrorBoundary>
  <div>
    <div className='Navlink'>
    <Link className='ind-link' to="/">
      <img src='https://www.clipartmax.com/png/small/103-1038771_computer-icons-house-home-page-blue-house-png-icon.png' alt='home'  width={20}/>
    </Link>
    <Link className='ind-link' to="/Counter">Custom Hook</Link>
    <Link className='ind-link' to="/useReducerCounter">Use Reducer </Link>
    <Link className='ind-link' to="/testErrorBoundary">Test Error Boundary</Link>
    </div>
    <Routes>
    <Route path='/' element={ <Home />} />
<Route path='/Counter' element={ <Counter />} />
<Route path='/useReducerCounter' element={ <CountReducer />} />
<Route path='/testErrorBoundary' element={ <Test />} />
<Route path="*" element={<Error404 />} />
    </Routes>
   
    </div>
    </ErrorBoundary>
    </>
  );
}
   
  

  


  

export default App;
