import React, { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { MdCall } from 'react-icons/md'
import { MdAccessTimeFilled } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'

function Contacte() {

    const [success, setsuccess] = useState(false)
    const [formdetailes, setformdetailes] = useState({
        username: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdetailes({
            ...formdetailes,
            [name]: value
        });
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        
        // const confirm = window.confirm("send form");
        // if (confirm == true) {
            const { username, email, number, subject, message } = formdetailes;
        const datasend = await fetch("http://scriptoptim.com/scriptapis/user_visitor.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username, email, number, subject, message
                })
            });
            const data = await datasend.json();
            // console.log(data.status)

            if (data.status) {
                // window.alert(data.msg);
                // console.log("send");
                setTimeout(() => {
                    setsuccess(true)
                }, 0);

                setTimeout(() => {
                    setsuccess(false)
                }, 2000);
            }
            else {
                window.alert(data.errer);
                // console.log("sorry");
            }

            setformdetailes({
                username: "",
                email: "",
                number: "",
                subject: "",
                message: ""
            })
        // }

    }

    return (
        <section className='section_pad' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col about_content text-center">
                        <h2>Just Get In Touch</h2>
                        <div className='bottom_line mx-auto'></div>
                        <p className='col-lg-8 col-sm-10 col-12 mx-auto mb-5'>Please feel free to write us your views and concerns. Our team will get back to you with proper solution…</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className='from_detailes col-12 d-flex mb-4'>
                            <i className='icon'><GrMail /></i>
                            <div>
                                <p className='app_title'>Email Address</p>
                                {/* <p className='app_detailes'>hr.scriptoptim@gmail.com</p> */}
                                <p className='app_detailes'>scriptoptiminfotech@gmail.com</p>
                            </div>
                        </div>
                        <div className='from_detailes col-12 d-flex mb-4'>
                            <i className='icon'><MdCall /></i>
                            <div>
                                <p className='app_title'>Mobile Number</p>
                                <p className='app_detailes'>+91 2614606316</p>
                            </div>
                        </div>
                        <div className='from_detailes col-12 d-flex mb-4'>
                            <i className='icon'><MdAccessTimeFilled /></i>
                            <div>
                                <p className='app_title'>Time</p>
                                <p className='app_detailes'>10:00am to 7:00pm</p>
                                <p className='app_detailes'>Sat-Sunday Closed</p>
                            </div>
                        </div>
                        <div className='from_detailes col-12 d-flex mb-4'>
                            <i className='icon'><IoLocation /></i>
                            <div>
                                <p className='app_title'>Address</p>
                                <p className='app_detailes'>2nd Floor 204, Shreenathji Icon, N/R Vip Circle,Utran, Surat, Gujarat, India-394105</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form method="POST" onSubmit={formSubmit}>
                            <div className="form_right form-floating">
                                <input
                                    autoComplete='off'
                                    type="text"
                                    className='form_box mb-4 form-control'
                                    name='username'
                                    value={formdetailes.username}
                                    onChange={(e) => handlechange(e)}
                                    placeholder= "username"
                                    required />
                                <label className="placeholder">Your Name</label>
                            </div>
                            <div className="form_right form-floating">
                                <input
                                    autoComplete='off'
                                    type="email"
                                    className='form_box mb-4 form-control'
                                    name='email'
                                    value={formdetailes.email}
                                    onChange={(e) => handlechange(e)}
                                    placeholder= "email"
                                    required />
                                <label className="placeholder">Your Email</label>
                            </div>
                            <div className="form_right form-floating">
                                <input
                                    autoComplete='off'
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    className='form_box mb-4 form-control'
                                    name='number'
                                    value={formdetailes.number}
                                    onChange={(e) => handlechange(e)}
                                    placeholder= "number"
                                    required />
                                <label className="placeholder">Phone Number</label>
                            </div>
                            <div className="form_right form-floating">
                                <input
                                    autoComplete='off'
                                    type="text"
                                    className='form_box mb-4 form-control'
                                    name='subject'
                                    value={formdetailes.subject}
                                    onChange={(e) => handlechange(e)} 
                                    placeholder= "subject"
                                    />
                                <label className="placeholder">Subject</label>
                            </div>
                            <div className="form_right form-floating">
                                <textarea
                                    rows="5"
                                    autoComplete='off'
                                    className='form_box mb-4 form-control h-100'
                                    name='message'
                                    value={formdetailes.message}
                                    onChange={(e) => handlechange(e)}
                                    placeholder= "message"
                                    height="100%"
                                    >
                                </textarea>
                                <label className="placeholder">Message</label>
                            </div>
                            <input type="submit" className='btn btn_bg' />
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="alert alert-success alert_show" role="alert"> */}
            <div className={success ? "alert alert-success alert_show" : "alert alert-success " } role="alert">
                Submit Your Form
            </div>
            {/* <div className="text-center">
                <div className="trigger-btn" data-bs-toggle="modal" data-bs-target="#myModal">Click to Open Confirm Modal</div>
            </div>
            <div id="myModal" className="modal fade" aria-modal="true">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="icon-box">
                                <i className="material-icons"></i>
                            </div>
                            <h4 className="modal-title w-100">Awesome!</h4>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn_success_ok btn-block" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </section >

    )
}

export default Contacte