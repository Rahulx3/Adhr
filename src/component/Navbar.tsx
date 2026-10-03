/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  //@ts-expect-error
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo" onClick={() => scrollTo("home")}>
          <img src={logo} alt="ADHR Logo" className="logo-image" />

          <div>
            <div className="logo-name">ADHR</div>
            <div className="logo-subtitle">
              Alternative Development of Himalayan Region
            </div>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("home")}>Home</button>

          <button onClick={() => scrollTo("about")}>About</button>

          <button onClick={() => scrollTo("initiatives")}>
            Initiatives
          </button>

          <button onClick={() => scrollTo("impact")}>Impact</button>

          <button
            className="nav-donate"
            onClick={() => scrollTo("contact")}
          >
            Get Involved
          </button>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;