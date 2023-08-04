import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Signin, Signup, AddProperty, Header, Footer, DashboardLayout, AboutUs, Career, CoreTeam, Error } from './components/component_index'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addproperty' element={<AddProperty />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/career' element={<Career />} />
	        <Route path='/team' element={<CoreTeam />} />
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>

      {/* <Routes>
        <Route>
          <Route path='/dashboard' element={<DashboardLayout />} />
        </Route>
      </Routes> */}

      <Footer />
    </BrowserRouter>
  )
}

export default App
