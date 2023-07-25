import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Signin, Signup, AddProperty, Header, Footer } from './components/component_index'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addproperty' element={<AddProperty />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
