import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Hobbies />
    </div>
  );
}

export default App;
