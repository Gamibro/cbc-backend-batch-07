import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'
import { Toaster } from 'react-hot-toast'
import AdminPage from '../pages/adminPage'
import Test from '../pages/test'

function App() {

  

  return (
   //applying flex to a div enable to manage other inner divs
   <BrowserRouter>
   <div className='w-full h-[100vh]'>
    <Toaster position='top-right'/>
    <Routes path="/">
      <Route path='/*' element={<HomePage/>}/> 
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<h1>Register</h1>}></Route>
      <Route path='/admin/*' element={<AdminPage/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
     
    
  )
}

export default App
