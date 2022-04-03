import {Link,useNavigate} from "react-router-dom";
import { React,useState } from 'react';

export default function Signin(props){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [text,setText]=useState('Enter your email and password to sign in')
  const [type,setType]=useState('info')
  let navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    let userInfo=JSON.parse(localStorage.getItem(email));
    props.setUser(userInfo);
    if(userInfo===null){
      setType('warning');
      setText('No account found with this email');
    }
    else{
      if(userInfo.password===password){
        navigate('/currencyconverter');
      }
      else{
        setType('danger');
        setText('Password is wrong');
      }
    }
      
  }

  return (
    <div className='d-flex justify-content-center min-vh-100 align-items-center row' style={{background:"linear-gradient(#e66465, #9198e5)"}}>
        <form className='p-4 shadow rounded col-9 col-md-4 bg-light' onSubmit={handleSubmit}>
            <div className={`alert alert-${type} text-center`}>
              {text}
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" required value={email} onChange={(e)=>{setEmail(e.target.value);setText('Enter your email and password to sign in');setType('info')}}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" required value={password} onChange={(e)=>{setPassword(e.target.value);setText('Enter your email and password to sign in');setType('info')}}/>
            </div>
            <button type="submit" className="btn btn-primary mt-3" style={{width:"100%"}}>Sign in</button>
            <div className="mt-4 text-center">
              <div className="form-text">Don't have an account yet? <Link to="/signup"> Sign up</Link></div>
            </div>
        </form>
    </div>
  )
}
