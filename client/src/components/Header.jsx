import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Azamon
        </Link>
        <Link to="/addProduct" className="text-xl font-bold">
          Add a Product
        </Link>
        <div>
          <Link to="/login" className="mr-4">
            Login
          </Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
