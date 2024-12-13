import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import NavBar from "./components/NavBar";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
