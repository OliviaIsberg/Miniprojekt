import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BigDrinkCard from "./components/BigDrinkCard";
import Header from "./components/Header";
import StartPage from "./pages/Startpage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";


function Layout() {
  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            {/* <Route path="alcohol/*" element={<DrinksContainer />} /> */}
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
