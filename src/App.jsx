import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import WE from './Components/WE/WE';
import Work from './Components/Work/Work';
import Services from './Components/Services/Services';
import WorkProcess from './Components/WorkProcess/WorkProcess'; 
import Question from './Components/Question/Question';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="we">
          <WE />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="workprocess">
          <WorkProcess />
        </section>

        <section id="question">
          <Question />
        </section>

        <section id="contact">
          <Contact />
        </section> 
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;