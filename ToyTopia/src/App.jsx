import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import CartPage from './pages/CartPage'
import { CartProvider } from './context/CartContext'

export default function App() {
  
  return (
    <>
        <BrowserRouter>
            <CartProvider>
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </MainLayout>
            </CartProvider>
        </BrowserRouter>
    </>
  )
}
