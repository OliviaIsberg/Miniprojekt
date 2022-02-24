import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BigDrinkCard from "./BigDrinkCard";
import Header from "./Header";
import StartPage from "../pages/Startpage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Footer from "./Footer";
import CardsContainer from "./CardsContainer";


function Layout() {
  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="alcohol/*" element={<CardsContainer />} />
            <Route path="drink/*" element={<BigDrinkCard />} />
            <Route path="about/*" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
