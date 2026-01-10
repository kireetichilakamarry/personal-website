
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#1F3B4D] shadow-lg flex items-center justify-between px-100 fixed top-0 left-0 w-full">
            <Link 
                to="/" 
                className="py-12 px-10 text-lg font-serif text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
            > 
                Home
            </Link>
            <Link 
                to="/education" 
                className="py-12 px-10 text-lg font-serif text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
            > 
                Education
            </Link>
            <Link 
                to="/projects"
                className="py-12 px-10 text-lg font-serif text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
            > 
                Projects
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
