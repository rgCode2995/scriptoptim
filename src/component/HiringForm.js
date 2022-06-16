import React, { useState, useEffect } from 'react'
import hiringimg from '../images/hiring.png';

function HiringForm() {

    const [success, setsuccess] = useState(false)
    const [pdf, setpdf] = useState("")
    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        number: "",
        email: "",
        profile: "",
        applyfor: "",
        year: "",
        month: "",
        education: "",
        resume: "",
        details: "",
    })

    const hendchange = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }
    const hendchangeImg = (e) => {
        // setdata({ ...data, resume: e.target.files[0] })
        // console.log(e.target.files[0])

        var fileInput = document.getElementById('file');
        var filePath = fileInput.value;
        setpdf('')
        // Allowing file type
        var allowedExtensions =
            /(\.pdf)$/i;

        if (!allowedExtensions.exec(filePath)) {
            setpdf('Select PDF File');
            fileInput.value = '';
            
            return false;
        }else{
            setdata({ ...data, resume: e.target.files[0] })
        }
    }

    // const apidata = async () => {
    //     const subform = await fetch("http://scriptoptim.com/scriptapis/uset_submit.php");
    //     const datastore = await subform.json();
    //     console.log(datastore)
    // }

    // useEffect(() => {
    //     apidata();
    // }, []);

    const hiring = async (e) => {
        e.preventDefault()
        // const { firstname, lastname, email, number, profile, applyfor, year, month, education, resume, details } = data;
        var fileInput = document.getElementById('file');
        // var filePath = fileInput.value;
        if (fileInput.value === '') {
            setpdf('Select PDF File');
        }

        var formdata = new FormData();
        formdata.append('firstname', data.firstname);
        formdata.append('lastname', data.lastname);
        formdata.append('number', data.number);
        formdata.append('email', data.email);
        formdata.append('profile', data.profile);
        formdata.append('applyfor', data.applyfor);
        formdata.append('year', data.year);
        formdata.append('month', data.month);
        formdata.append('education', data.education);
        formdata.append('resume', data.resume);
        formdata.append('details', data.details);



        // var requestOptions = {
        //     method: 'POST',
        //     body: formdata,
        //     redirect: 'follow'
        // };

        // fetch("http://scriptoptim.com/scriptapis/uset_submit.php", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        // const datastore = await subform.json();
        // console.log(datastore)


        const subform = await fetch("http://scriptoptim.com/scriptapis/uset_submit.php", {
            method: 'POST',
            body: formdata,
            // redirect: 'follow'
        });
        const datastore = await subform.json();
        console.log(datastore)


        if (datastore.status) {
            // window.alert(datastore.msg);
            // console.log("send hiring");
            setTimeout(() => {
                setsuccess(true)
            }, 0);

            setTimeout(() => {
                setsuccess(false)
            }, 3000);

            setdata({
                firstname: "",
                lastname: "",
                number: "",
                email: "",
                profile: "",
                applyfor: "",
                year: "",
                month: "",
                education: "",
                resume: "",
                details: "",
            })
            var fileInput = document.getElementById('file');
            fileInput.value = '';

        }
        else {
            window.alert(datastore.error);
            // console.log("sorry hiring");
        }

        


    }



    return (
        <>
            <img src={hiringimg} alt="hiring" className='hiring' data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
            <div className={success ? "alert alert-success alert_show" : "alert alert-success "} role="alert">
                Submited Your Form
            </div>
            <section>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-bg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Apply Now</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <form method='POST' className="row" onSubmit={hiring} encType="multipart/form-data">
                                        <div className="col-md-6 mb-4 ">
                                            <p>First Name<sup>*</sup></p>
                                            <input
                                                autoComplete='off'
                                                type="text"
                                                className="form-control new-form"
                                                onChange={hendchange}
                                                value={data.firstname}
                                                name="firstname" />
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Last Name<sup>*</sup></p>
                                            <input
                                                autoComplete='off'
                                                type="text"
                                                className="form-control  new-form"
                                                onChange={hendchange}
                                                value={data.lastname}
                                                name="lastname" />
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Phone Number<sup>*</sup></p>
                                            <input
                                                autoComplete='off'
                                                type="tel"
                                                className="form-control  new-form"
                                                onChange={hendchange}
                                                value={data.number}
                                                name="number"
                                                pattern="[0-9]{10}"
                                                required />
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Email</p>
                                            <input
                                                autoComplete='off'
                                                type="email"
                                                className="form-control  new-form"
                                                onChange={hendchange}
                                                value={data.email}
                                                name="email"
                                                required />
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Profile<sup>*</sup></p>
                                            <div className="">
                                                <select className="new-form form-control" onChange={hendchange} value={data.profile} name="profile" >
                                                    <option value="">---</option>
                                                    <option value="Experience">Experience</option>
                                                    <option value="Fresher">Fresher</option>
                                                </select>
                                                {/* <<i className="bi bi-caret-down-fill"></i> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Apply For<sup>*</sup></p>
                                            <select className="form-control  new-form" onChange={hendchange} value={data.applyfor} name="applyfor">
                                                <option>---</option>
                                                <option>Android Developer</option>
                                                <option>WordPress Developer</option>
                                                <option>Web Developer</option>
                                                <option>Graphics Designer</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Experience Year<sup>*</sup></p>
                                            <select className="form-control  new-form" onChange={hendchange} value={data.year} name="year">
                                                <option>---</option>
                                                <option>0 Year</option>
                                                <option>1 Year</option>
                                                <option>2 Year</option>
                                                <option>3 Year</option>
                                                <option>4 Year</option>
                                                <option>5 Year</option>
                                                <option>6 Year</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Experience Month<sup>*</sup></p>
                                            <select className="form-control  new-form" onChange={hendchange} value={data.month} name="month">
                                                <option>---</option>
                                                <option>0 Month</option>
                                                <option>1 Month</option>
                                                <option>2 Month</option>
                                                <option>3 Month</option>
                                                <option>4 Month</option>
                                                <option>5 Month</option>
                                                <option>6 Month</option>
                                                <option>7 Month</option>
                                                <option>8 Month</option>
                                                <option>9 Month</option>
                                                <option>10 Month</option>
                                                <option>11 Month</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-4 ">
                                            <p>Education<sup>*</sup></p>
                                            <input
                                                autoComplete='off'
                                                type="text"
                                                className="form-control  new-form"
                                                onChange={hendchange}
                                                value={data.education}
                                                name="education" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <p>Upload Resume<sup>*</sup></p>
                                            <input
                                                id="file"
                                                autoComplete='off'
                                                type="file"
                                                className="form-control  new-form"
                                                onChange={hendchangeImg}
                                                name="resume"
                                                // accept="image/jpeg, application/pdf" 
                                                />
                                            <p className='error'>{pdf}</p>
                                        </div>
                                        <div className="col mb-4">
                                            <p>Details<sup>*</sup></p>
                                            <textarea className="form-control details-area  new-form" onChange={hendchange} value={data.details} name="details"></textarea >
                                        </div>
                                        <div className="modal-footer">
                                            <div className="btn btn_bg btn_close" data-bs-dismiss="modal">Close</div>
                                            <div className="btn btn_bg">
                                                <input type="submit" className="sub-none" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HiringForm