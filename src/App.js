import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WaveDivider, SoftDivider } from "./components/SectionDivider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SoftDivider />
      <Experience />
      <SoftDivider />
      <Projects />
      <WaveDivider fill="#AA367C" />
      <Contact />
      <WaveDivider fill="#121212" />
      <Footer />
    </div>
  );
}

export default App;