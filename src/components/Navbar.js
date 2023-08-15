import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => (
  <nav>
    <FiChevronLeft className="icons" />
    <p>EMOJIS</p>
    <div className="right-icons">
      <HiOutlineSearch className="icons" />
      <IoMdSettings className="icons" />
    </div>
  </nav>
);

export default Navbar;
