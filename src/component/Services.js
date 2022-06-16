import React from 'react'
import services1 from '../images/services1.png'
import services2 from '../images/services2.png'
import services3 from '../images/services3.png'
import services4 from '../images/services4.png'
import services5 from '../images/services5.png'
import services6 from '../images/services6.png'

function Services() {
    return (
        <section className='section_pad services_bg' id='services'>
            <div className="container">
                <div className="row">
                    <div className="col about_content text-center">
                        <h2>Services</h2>
                        <div className='bottom_line mx-auto'></div>
                        <p className='col-md-8 col-12 mx-auto mb-5'>We help agencies to define their new business objectives and then create the road map.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="fade-up">
                        <div className="service_box">
                            <img src={services1} alt="services1" />
                            <h4>App Development</h4>
                            <p>We offers professional and reliable Android App Development services that serve to diverse client needs. Our model selection is based on the size of the project, urgency, client requirements and so on.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="service_box">
                            <img src={services2} alt="services2" />
                            <h4>Web Development</h4>
                            <p>We are creating elite, responsive and matchless websites in cost-effective and flexible approach with our excellent technology stacks, ensuring your dreams comes true.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="service_box">
                            <img src={services3} alt="services3" />
                            <h4>Web & Graphics Design</h4>
                            <p>We give you the hedge over your competitor for success by creating simple but not easy website. Scriptoptim Infotech design your website by mingle software tool with human mind.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="fade-up">
                        <div className="service_box">
                            <img src={services4} alt="services4" />
                            <h4>E-Commerce Development</h4>
                            <p>We understand it’s a competitive environment out there. Get the best out of eCommerce web development services which provides out of the box and creative yet insanely user-friendly websites.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="service_box">
                            <img src={services5} alt="services5" />
                            <h4>IT Solution</h4>
                            <p>
A software solution is typically custom-built or configured to solve a specific customer problem. It could include: Custom Software Development. Customized Assembly of multiple software products. Custom Implementation of existing software platforms or products.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="service_box">
                            <img src={services6} alt="services6" />
                            <h4>Digital Marketing</h4>
                            <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.

Essentially, if a marketing campaign involves digital communication, it's digital marketing.

</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services