import About from './About';
import Career from './Career';
import Contacte from './Contacte';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import Protfolio from './Protfolio';
import Services from './Services';
import HiringForm from './HiringForm';


function AppMain() {

  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Career />
      <Protfolio />
      <Contacte />
      <Footer />
      <HiringForm />

    </>
  );
}

export default AppMain;
