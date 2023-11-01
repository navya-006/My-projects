import React from 'react'
import { BrowserRouter,Routes,Route, Form} from 'react-router-dom'
import Home from './Home'
import Filldetails from './Filldetails'
import Alldata from './Alldata'
import Navbar from './Navbar'
import UpdateForm from './UpdateForm'
export default function Router() {
  return (
    <div>
           <BrowserRouter>
        <Routes>
            <Route exact path ='/' element={<Home/>}/>
            <Route exact path ='/Filldetails' element={<Filldetails/>}/>
            <Route exact path ='/UpdateForm/:id' element={<UpdateForm/>}/>
            <Route exact path ='/Alldata' element={<Alldata/>}/>
            <Route exact path ='/Navbar' element={<Navbar/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}
