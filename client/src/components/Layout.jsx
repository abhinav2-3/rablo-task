import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between">
          <Link to="/" className="text-xl font-bold">
            Azamon
          </Link>
          <Link to="/products" className="text-xl font-bold">
            Azamon
          </Link>
          <div>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
