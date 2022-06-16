import { useEffect, useState } from "react"
import React from 'react'
import { HiDocumentDownload } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import  androidimg  from "../images/android.png";

function DataTable() {
    const [data, setdata] = useState([])
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    // const datashow = async () => {
    //     const data = await fetch('./admin')
    //     const result = await data.json();
    //     setdata(result);
    // }
    const datashow = async () => {
        // const subform = await fetch("http://scriptoptim.com/scriptapis/uset_submit.php");
        // const datastore = await subform.json();
        // console.log(datastore)

        fetch("http://scriptoptim.com/scriptapis/uset_submit.php")
            .then(response => response.text())
            .then(result => console.log(result, "ok"))
            .catch(error => console.log('error', error));
    }
    // console.log(data)

    useEffect(() => {
        datashow()
        if (token) {
            navigate('/datatable')
        } else {
            navigate('/admin')
        }
    }, [])

    const logout = () => {
        localStorage.clear();
        navigate('/admin')
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col pt-3">
                        <button className="btn btn_bg" onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-3 ">
                        <div className='tableborder'>
                            <div className="tablescroll">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className="table_head">
                                            <th scope="col">#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                            <th>Profile</th>
                                            <th>Apply For</th>
                                            <th>Experience Year</th>
                                            <th>Experience Month</th>
                                            <th>Education</th>
                                            <th>Details</th>
                                            <th>Upload Resume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((e, id) =>
                                                <tr key={id}>
                                                    <th scope="row">{id}</th>
                                                    <td className="col_width_1">{e.firstname}</td>
                                                    <td className="col_width_1">{e.lastname}</td>
                                                    <td className="col_width_1">{e.number}</td>
                                                    <td className="col_width_2">{e.email}</td>
                                                    <td className="col_width_1">{e.profile}</td>
                                                    <td className="col_width_2">{e.applyfor}</td>
                                                    <td className="col_width_1">{e.year}</td>
                                                    <td className="col_width_1">{e.month}</td>
                                                    <td className="col_width_3">{e.education}</td>
                                                    <td className="col_width_4">{e.details}</td>
                                                    <td className="col_width_2 ">
                                                        <a href={e.resume}  download="custom-filename" target="blank">
                                                            <div className="d-flex justify-content-between">
                                                                {e.resume}
                                                                <div className="ms-3">
                                                                    <HiDocumentDownload />
                                                                </div>
                                                            </div>
                                                        </a>

                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DataTable