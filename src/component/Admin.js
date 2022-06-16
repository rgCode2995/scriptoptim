import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    const adminshow = (e) => {
        e.preventDefault();

        if (username === "aaa" && password === "aaa") {
            localStorage.setItem("token", "save");
            navigate('/datatable')
        }
        setusername("")
        setpassword("")
    }

    useEffect(() => {
        if (token) {
            navigate('/datatable')
        }
    }, [])


    return (
        <>
            <div className="container height_full" >
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <form onSubmit={adminshow}>
                            <div className="form_right form-floating">
                                <input
                                    autoComplete='off'
                                    type="text"
                                    className='form_box mb-4 form-control'
                                    name='username'
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                    placeholder="UserName"
                                />
                                <label className="placeholder">UserName</label>
                            </div>
                            <div className="form_right form-floating">
                                <input
                                    autoComplete='off'
                                    type="password"
                                    className='form_box mb-4 form-control'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder="password"
                                />
                                <label className="placeholder">password</label>
                            </div>
                            <input type="submit" className='btn btn_bg' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin