import Logo from '../../images/name_logo.png';

import { Link } from 'react-router-dom';
import Data from '../../utils/Data.js';
import { FaBars } from 'react-icons/fa';
import { HiX } from "react-icons/hi";
import { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img src='data:image/png;base64,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' alt='mylogo' style={{ "width": "40px", "height": "40px" }} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {Data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
