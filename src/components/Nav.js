import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLinks = () => (
  <>
    <NavLink 
      to="/" 
      className="navlink mr-4 text-customLink hover:text-customHover"
    >
      Home
    </NavLink>
    <NavLink 
      to="/about" 
      className="navlink mr-4 text-customLink hover:text-customHover"
    >
      About
    </NavLink>
    <NavLink 
      to="/resume" 
      className="navlink mr-4 text-customLink hover:text-customHover"
    >
      Resume
    </NavLink>
    <NavLink 
      to="/projects" 
      className="navlink mr-4 text-customLink hover:text-customHover"
    >
      Projects
    </NavLink>
    <NavLink 
      to="/activities" 
      className="navlink mr-4 text-customLink hover:text-customHover"
    >
      Activities
    </NavLink>
    <NavLink 
      to="/contact" 
      className="navlink text-customLink hover:text-customHover"
    >
      Contact
    </NavLink>
  </>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-end">
      <div className="hidden w-full md:flex md:justify-end" style={{ paddingRight: '2em' }}>
        <NavLinks />
      </div>
      <div className="md:hidden mr-1">
        <button onClick ={toggleNavbar} className=" mr-2.5">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Nav;
