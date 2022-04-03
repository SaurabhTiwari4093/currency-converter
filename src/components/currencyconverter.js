import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import Navbar from './navbar';

export default function Currencyconverter(props){
  const [currency,setCurrency]=useState();
  const apikey='f316414a3caa4954ca9f84ee071a375d';
  const [loading,setLoading]=useState(false);
  const [souCur,setSouCur]=useState(0);
  const [rate1,setRate1]=useState(1);
  const [rate2,setRate2]=useState(0);
  const [rate3,setRate3]=useState(0);
  let navigate = useNavigate()

  useEffect(() => {
    if(props.user===null){
      navigate('/');
    }
  }, [])

  useEffect(async()=>{
      const url=`http://api.exchangeratesapi.io/v1/latest?access_key=${apikey}`;
      let data=await fetch(url);
      let parsedData=await data.json();
      setCurrency(parsedData.rates)
      setLoading(true);
  },[])

  return(
  <>
  <Navbar/>
  <div className='d-flex justify-content-center min-vh-100 align-items-center row' style={{background:"linear-gradient(#e66465, #9198e5)"}}>
    <div className='col-9 p-4 shadow rounded bg-light'>
      <div className={`alert alert-info text-center h4`}>
          CURRENCY CONVERTER
      </div>
      <div className='row row-cols-1 row-cols-md-3'>
        <div className='col my-2'>
          <select className="form-select my-2" onChange={(e)=>{setRate1(e.target.value)}}>
                  <option value="0" className='d-none'>Source currency</option>
                  {loading &&
                    Object.keys(currency).map((cur, i) => (
                      <option key={i} value={currency[cur]}>{cur}</option>
                  ))} 
          </select>
          <input className="form-control my-2" value={souCur} onChange={(e)=>{setSouCur(e.target.value)}}/>
        </div>
        <div className='col my-2'>
            <select className="form-select my-2" onChange={(e)=>{setRate2(e.target.value)}}>
                  <option value="0" className='d-none'>Target currency</option>
                  {loading &&
                    Object.keys(currency).map((cur, i) => (
                      <option key={i} value={currency[cur]}>{cur}</option>
                    ))}   
            </select>
            <input disabled className="form-control my-2" value={souCur*rate2/rate1}/>
            <input disabled className="form-control my-2" value={"Conversion rate: " + rate2/rate1}/>
        </div>
        <div className='col my-2'>
          <select className="form-select my-2" onChange={(e)=>{setRate3(e.target.value)}}>
                  <option value="0" className='d-none'>Target currency</option>
                  {loading &&
                    Object.keys(currency).map((cur, i) => (
                      <option key={i} value={currency[cur]}>{cur}</option>
                  ))}   
          </select>
          <input disabled className="form-control my-2" value={souCur*rate3/rate1}/>
          <input disabled className="form-control my-2" value={"Conversion rate: " +rate3/rate1}/>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

