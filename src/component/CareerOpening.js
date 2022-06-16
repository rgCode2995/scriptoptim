import React from 'react'
import android from '../images/android.png'
import react from '../images/react.png'
import flutter from '../images/flutter.png'
import nodejs from '../images/nodejs.png'
import swift from '../images/swift.png'
import appleIos from '../images/icn_apple.png'
import kotlin from '../images/icn_kotlin.png'

function CareerOpening() {
    return (
        <section className='section_pad services_bg'>
            <div className="container">
                <div className="row">
                    <div className="col about_content text-center">
                        <h2>Current Openings</h2>
                        <div className='bottom_line mx-auto'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={android} alt="react" />
                            <h4>Android Developer</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos-delay="200" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={react} alt="react" />
                            <h4>ReactJs</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos-delay="400" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={flutter} alt="flutter" />
                            <h4>Flutter Developer</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={react} alt="react" />
                            <h4>React Native</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos-delay="200" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={nodejs} alt="nodejs" />
                            <h4>NodeJs</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos-delay="400" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={appleIos} alt="swift" />
                            <h4>IOS Developer</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4" data-aos-delay="400" data-aos="zoom-in">
                        <div className="career_box text-center">
                            <img src={kotlin} alt="swift" />
                            <h4>Kotlin Developer</h4>
                            <p>0 to 2 Year (Openings:1)</p>
                            <button className='btn_bg btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerOpening