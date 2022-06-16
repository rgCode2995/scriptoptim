import './App.css';
import About from './component/About';
import Career from './component/Career';
import Contacte from './component/Contacte';
import Footer from './component/Footer';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Protfolio from './component/Protfolio';
import Services from './component/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HiringForm from './component/HiringForm';
import Admin from './component/Admin';
import AppMain from './component/AppMain';
import DataTable from './component/DataTable'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom',
  });
  
  return (
    <>
      {/* <Router> */}
      <Router>

      {/* <Navbar />
      <Main />
      <About />
      <Services />
      <Career />
      <Protfolio />
      <Contacte />
      <Footer />
      <HiringForm /> */}
        <Routes>
          <Route path="/" element={<AppMain />} exact />
          <Route path="/admin" element={<Admin />} exact />
          <Route path="/datatable" element={<DataTable />} exact />

        </Routes>
      </Router>

      {/* <Route exact path="/admin" component={Admin} /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
