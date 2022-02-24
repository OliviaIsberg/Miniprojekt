import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BigDrinkCard from '../BigDrinkCard/BigDrinkCard'
import Header from '../Header/Header'
import StartPage from '../../pages/Startpage'
import AboutPage from '../../pages/AboutPage'
import ErrorPage from '../../pages/ErrorPage'
import Footer from '../Footer/Footer'
import CardsContainer from '../CardsContainer/CardsContainer'

function Layout() {
  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route
              path="alcohol/gin"
              element={<CardsContainer drinks={[]} />}
            />
            <Route
              path="alcohol/vodka"
              element={<CardsContainer drinks={[]} />}
            />
            <Route
              path="alcohol/bourbon"
              element={<CardsContainer drinks={[]} />}
            />
            <Route path="drink/*" element={<BigDrinkCard />} />
            <Route path="about/*" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default Layout
