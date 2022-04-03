import React, { useState} from 'react'
import {Link,useNavigate} from "react-router-dom";

export default function Signup(props){
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [text,setText]=useState('Enter your info to sign up')
    const [type,setType]=useState('info')
    let navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        let user=JSON.parse(localStorage.getItem(email));
        if(user===null){
            let userInfo={
                "firstName":firstName,
                "lastName":lastName,
                "email":email,
                "password":password
            }
            let userInformation=JSON.stringify(userInfo)
            props.setUser(userInformation);
            localStorage.setItem(email,userInformation);
            navigate('/currencyconverter');
        }
        else{
            setType('warning');
            setText('Account already exist with this email');
        }
    }

    return (
        <div className='d-flex justify-content-center min-vh-100 align-items-center row' style={{background:"linear-gradient(#e66465, #9198e5)"}}>
            <form className='p-4 shadow rounded col-9 col-md-4 bg-light' onSubmit={handleSubmit}>
                <div className={`alert alert-${type} text-center`}>
                {text}
                </div>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" required value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" required value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" required value={email} onChange={(e)=>{setEmail(e.target.value);setText('Enter your info to sign up');setType('info')}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" required autoComplete="on" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" style={{width:"100%"}}>Sign up</button>
                <div className="mt-3 text-center">
                    <div className="form-text">Already have an account? <Link to="/"> Sign in</Link></div>
                </div>
            </form>
        </div>
    )
}
