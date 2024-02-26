import "./App.css";
import Home from "./components/home/Home.js"
import Navbar from "./components/navbar/Navbar.js"
import Skills from "./components/skills/Skills.js";

function App() {
  return (
    <div className=" max-w-screen-xl mx-auto px-4">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
