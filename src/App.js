import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import { HomePage } from './component/Home';
import {Contact} from './component/Contact'
import { Content } from './component/Content';
 function App()
 {
   return (
     <div className='App'>
       <Router>
          <div>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='Home' element={<HomePage/>}></Route>
            <Route path='Contact' element={<Contact/>}></Route>
            <Route path='Content' element={<Content/>}></Route>
            <Route path='*' element={<div>404 Not found</div>}></Route>
          </Routes>
          </div>
      </Router>
    </div>
  )
 }



export default App;
