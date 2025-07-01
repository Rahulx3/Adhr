import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `text-gray-300 hover:text-blue-400 transition duration-200 ${
      location.pathname === path ? "font-semibold underline underline-offset-4 text-white" : ""
    }`;

  return (
    <header className="bg-gray-900 shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <div className="flex items-center">
          <img
            src="logo.png" // Update this path to the correct logo file location
            alt="ADHR Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-white text-xl">ADHR</h1>
        </div>

        <nav className="flex space-x-6 items-center">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
          <Link
            to="/donate"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 shadow"
          >
            Donate Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
