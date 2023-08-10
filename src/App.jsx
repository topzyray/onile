import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Signin, Signup, AddProperty, Header, Footer, AboutUs, Career, CoreTeam, Error, AllProperties, PropertyDetails } from './components/component_index'
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
          <Route path='/properties' element={<AllProperties />} />
          <Route path='/properties/:id' element={<PropertyDetails />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/career' element={<Career />} />
	        <Route path='/team' element={<CoreTeam />} />
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
