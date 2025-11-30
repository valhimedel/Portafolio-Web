import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Paginas/Home";
import About from "./Paginas/About";
import Habilities from "./Paginas/Habilities";  
import Works from "./Paginas/Works";       
import Contact from "./Paginas/Contact";         

import MusicBar from "./components/MusicBar";

function LayoutWithMusicBar() {
  const location = useLocation();

  // ORDEN DE NAVEGACIÓN
  const pathMap = [
    "/about",
    "/habilities",
    "/works",
    "/contact"
    
  ];

  const currentIndex = pathMap.indexOf(location.pathname);
  const prevPath = currentIndex > 0 ? pathMap[currentIndex - 1] : "/";
  const nextPath = pathMap[currentIndex + 1] || null;

  const showBar = location.pathname !== "/";

  return (
    <>
      {showBar && (
        <MusicBar 
          prevPath={prevPath}
          nextPath={nextPath}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/habilities" element={<Habilities />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <LayoutWithMusicBar />
    </Router>
  );
}

