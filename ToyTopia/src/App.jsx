import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'

export default function App() {
  
  return (
    <>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
    </>
  )
}
