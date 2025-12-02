import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

export default function App() {
  
  return (
    <>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
    </>
  )
}
