import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-yellow-400">RIFATH'S MIMICRY</h1>
      <div>
        <Link className="text-white px-4 hover:text-yellow-300" to="/">Home</Link>
        <Link className="text-white px-4 hover:text-yellow-300" to="/voice-mimic">Voice Mimic</Link>
        <Link className="text-white px-4 hover:text-yellow-300" to="/custom-mimic">Custom Mimic</Link>
        <Link className="text-white px-4 hover:text-yellow-300" to="/about">About</Link>
        <Link className="text-white px-4 hover:text-yellow-300" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
