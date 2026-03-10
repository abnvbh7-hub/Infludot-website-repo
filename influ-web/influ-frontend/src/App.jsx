import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Features from "./Features.jsx"
import Login from "./Login.jsx"
import AdminPanel from "./AdminPanel.jsx"
import TermsConditions from "./TandC.jsx"
import CancelationPolicy from "./Cancel.jsx"
import RefundPolicy from "./Refund.jsx"
import PrivacyPolicy from "./PrivacyPolicy.jsx"
import ManageBrands from "./ManageBrands.jsx"
import ManageCreators from "./ManageCreators.jsx"


export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
      <Route path='/admin/brands' element={<ManageBrands/>}/>
      <Route path='/admin/creators' element={<ManageCreators/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/tandc" element={<TermsConditions/>}/>
      <Route path="/refund" element={<RefundPolicy/>}/>
      <Route path="/cancel" element={<CancelationPolicy/>}/>
    </Routes>
    </>
  )
}
