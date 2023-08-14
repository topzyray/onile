import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Public/Home'
import Signin from './pages/Public/Signin'
import Signup from './pages/Public/Signup'
import AllProperties from './pages/AllProperties'
import PropertyDetails from './pages/PropertyDetails'
import AboutUs from './pages/Public/AboutUs'
import Career from './pages/Public/Career'
import CoreTeam from './pages/Public/CoreTeam'
import Error from './pages/Public/Error'
import Layout from './components/Layout'
import DashboardLayout from './components/DashboardLayout'
import Listing from './pages/Host/Listing'
import AddProperty from './pages/Host/AddProperty'
import Account from './pages/Host/Account'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='properties' element={<AllProperties />} />
          <Route path='/properties/:id' element={<PropertyDetails />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='career' element={<Career />} />
	        <Route path='team' element={<CoreTeam />} />
          <Route path='*' element={<Error />}/>

          {/* Host Routes */}

          <Route path='dashboard' element={<DashboardLayout />}>
            <Route index element={<Listing />} />
            <Route path='addproperty' element={<AddProperty />} />
            <Route path='account' element={<Account />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
