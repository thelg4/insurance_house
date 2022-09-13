import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import { MdArrowDropDown, MdViewList, MdClose } from 'react-icons/md'
import "./Navbar.css";


function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Insurance House
            </Link>

            <div className='menu-icon' onClick={ handleClick }>
                { click ? <MdClose /> : <MdViewList /> }
            </div>

            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>

                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>  
                    Services<MdArrowDropDown />
                </Link>
                {dropdown && <Dropdown />}

                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>

                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
