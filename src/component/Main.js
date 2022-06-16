import React from 'react'
import heroimg from '../images/hero_img.png'
import { Link } from 'react-scroll'

function Main() {
  return (
    <section className='section_pad' id='home'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-0 order-1 main_left" data-aos="zoom-in">
            <h1>Mobile App & Web App Development</h1>
            <p>We are a premier web and mobile app development company with bases in India. With scriptoptim, you work with handpicked brains from the app development industry, who also possess business acumen. Together, we help you roll out applications that not just clique among the masses but fetch you profits as well. We give shape to your intangible ideas, turning them into profit-generating applications that solve real-world concerns.</p>
            {/* <a href="" className="">Contact Us</a> */}
            <Link to="contact" spy={true} offset={-50} className="btn btn_bg">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6 order-md-1 order-0 main_right" data-aos="zoom-in">
            <img src={heroimg} alt="heroimg" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Main