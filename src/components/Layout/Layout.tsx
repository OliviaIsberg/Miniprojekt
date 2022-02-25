import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import StartPage from '../../pages/Startpage'
import AboutPage from '../../pages/AboutPage'
import ErrorPage from '../../pages/ErrorPage'
import Footer from '../Footer/Footer'
import DrinkPage from '../../pages/DrinkPage'
import BoozePage from '../../pages/BoozePage'

function Layout() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route
              path="alcohol/:booze"
              element={<BoozePage />}
            />
            <Route path="drink/:id" element={<DrinkPage drinks={[]} />} />
            <Route path="about/*" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default Layout
