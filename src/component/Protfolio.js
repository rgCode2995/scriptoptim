import React from 'react'
import protfolio1 from '../images/protfolio1.png'
import protfolio2 from '../images/protfolio2.png'
import protfolio3 from '../images/protfolio3.png'
import protfolio4 from '../images/protfolio4.png'
import protfolio5 from '../images/protfolio5.png'
import protfolio6 from '../images/protfolio6.png'
import logo_calender from '../images/logo_calender.png'
import photocut from '../images/photocut.png'
import festivalpostmaker from '../images/festivalpostmaker.png'
import quotesmaker from '../images/quotesmaker.png'

function Protfolio() {
    return (
        <section className='section_pad' id='portfolio'>
            <div className="container">
                <div className="row">
                    <div className="col about_content text-center">
                        <h2>Our Portfolio</h2>
                        <div className='bottom_line mx-auto'></div>
                        <p className='col-lg-8 col-sm-10 col-12 mx-auto mb-5'>Quality, Assurance and Reliability Are Dispatched Seamlessly Through Our Bespoke Mobile, Web & Software Solutions.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={protfolio1} alt="protfolio1" className='logo_app_img' />
                                    <p className='app_title'>Taxi App</p>
                                    <p className='app_detailes'>Taxi app booking application offers the simple and quickest approach to book a ride. Running in India.</p>
                                </div>
                            </div>
                            <div className="face face2">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={protfolio2} alt="protfolio1" className='logo_app_img' />
                                    <p className='app_title'>Messager App</p>
                                    <p className='app_detailes'>Messages with different fonts, ringtones, call features, Send new stickers, funny faces, GIFs & text via SMS messages.</p>
                                </div>
                            </div>
                            <div className="face face2">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={logo_calender} alt="protfolio1" className='logo_app_img' />
                                    <p className='app_title'>Digital Poster Maker</p>
                                    <p className='app_detailes'>Create amazing posters with a poster maker. 5000+ poster templates. Free, quick & easy to use. No poster design skills are needed.</p>
                                </div>
                            </div>
                            <div className="face face2">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={photocut} alt="protfolio1" className='logo_app_img' />
                                    <p className='app_title'>Auto Cut Paste Photo</p>
                                    <p className='app_detailes'>Photo Cut paste Editor is easy-to-use photo editor and photo background erase using AI human detection features.</p>
                                </div>
                            </div>
                            <div className="face face2">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={quotesmaker} alt="protfolio1" className='logo_app_img' />
                                    <p className='app_title'>Quotes Creator</p>
                                    <p className='app_detailes'>Quote Maker app is a photo editing app that helps users make quotes using beautiful typography fonts with picture.</p>
                                </div>
                            </div>
                            <div className="face face2">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={festivalpostmaker} alt="protfolio1" className='logo_app_img' />
                                    <p className='app_title'>Post Maker</p>
                                    <p className='app_detailes'>Promotional posters, advertisement, offer announcements, cover photos for your shop, restaurant, office or social sites.</p>
                                </div>
                            </div>
                            <div className="face face2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Protfolio