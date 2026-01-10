import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Education from './routes/Education';
import Projects from './routes/Projects';

function App() {

  return (
    <>
      <div className="flex items-center bg-[#353535]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
