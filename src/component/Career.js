import React from 'react'
import leave from '../images/leave.png'
import vacation from '../images/vacation.png'
import bonus from '../images/bonus.png'
import growth from '../images/growth.png'
import training from '../images/training.png'
import friendly from '../images/friendly.png'
import CareerOpening from './CareerOpening';

function Career() {
    return (
        <section id='career'>
            <div className='section_pad' >
                <div className="container">
                    <div className="row">
                        <div className="col about_content text-center">
                            <h2>Career</h2>
                            <div className='bottom_line mx-auto'></div>
                            <p className='col-lg-8 col-sm-10 col-12 mx-auto mb-5'>We always wish to keep our team young, energetic and creative. We are motivated to provide value and high performance to our client</p>
                            <h4 className='career_title'>Benefits to join Scriptoptim Infotech</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12 mb-4" data-aos="zoom-in">
                            <div className="career_bg">
                                <img src={leave} alt="leave" className='me-3' />
                                <p>Paid Leave</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="career_bg">
                                <img src={vacation} alt="vacation" className='me-3' />
                                <p>Paid Vacation</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="career_bg">
                                <img src={bonus} alt="bonus" className='me-3' />
                                <p>Performance Bonus</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-4" data-aos="zoom-in">
                            <div className="career_bg">
                                <img src={growth} alt="growth" className='me-3' />
                                <p>Career Growth</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="career_bg">
                                <img src={training} alt="training" className='me-3' />
                                <p>Employee Training</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="career_bg">
                                <img src={friendly} alt="friendly" className='me-3' />
                                <p>Friendly Environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CareerOpening />
        </section>
    )
}

export default Career