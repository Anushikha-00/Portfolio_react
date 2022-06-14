import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";


function App() {
  return (
    <div className="App">
     <Navbar />
      <About />
      <TechStack />
      <Experience />
    </div>
      
  );
}

export default App;
