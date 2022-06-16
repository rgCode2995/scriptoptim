import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import { HiMenuAlt1 } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import { Link } from 'react-scroll'

function Navbar() {

  const [menu, setmenu] = useState(true);
  // const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollValue = document.documentElement.scrollTop;
      if (scrollValue > 100) {
        const navbar = document.querySelector('.navbar_menu_heade');
        navbar.classList.add('show')
      } else {
        const navbar = document.querySelector('.navbar_menu_heade');
        navbar.classList.remove('show')
      }
    })
  })


  return (
    <section className='py-2 navbar_menu_heade'>
      <div className='container-lg'>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="home" offset={-80}>
            <img src={logo} alt="logo" className='logoimg' />
          </Link>
          <ul className={menu ? "menu_per " : "menu_per show_menu"}>
            <li className='navbar_menu'>
              <Link to="home" spy={true} offset={-80} className="menu_name">
                Home
              </Link>
            </li>
            <li className='navbar_menu'>
              <Link to="about" spy={true} offset={-40} className="menu_name">
                About
              </Link>
            </li>
            <li className='navbar_menu'>
              <Link to="services" spy={true} offset={-40} className="menu_name">
                Services
              </Link>
            </li>
            <li className='navbar_menu'>
              <Link to="career" spy={true} offset={-40} className="menu_name">
                Career
              </Link>
            </li>
            <li className='navbar_menu'>
              <Link to="portfolio" spy={true} offset={-40} className="menu_name">
                Portfolio
              </Link>
            </li>
            <li className='navbar_menu'>
              <Link to="contact" spy={true} offset={-40} className="menu_name">
                Contact
              </Link>
            </li>
          </ul>
          <i className='menu_icon' onClick={() => setmenu(!menu)}>
            {menu ? <HiMenuAlt1 /> : <GrFormClose />}
          </i>
        </div>

      </div>
    </section>
  )
}

export default Navbar