import React, { useState } from 'react'
import SpList from '../data/data.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()

  const initialState = {firstName:"",lastName:"",birthDate:"",gender:"",
                      email:"",phoneNumber:"",specialist:"",symptom:"",medHistory:""}

  const [data,setData] = useState(initialState)

const handleData = (e) =>
{
  const nam = e.target.name
  const value = e.target.value

  setData({...data,[nam]:value})
  
}

const handleSubmit = async (e) =>
{
  e.preventDefault()
 await axios.post('/registerPatient',data)
  .then((res)=>{
        if (res.status===200)
        {
          navigate('/successMsg') 
        }    
        else
        {
          alert(res.data.message)
        }
})

  .catch((err)=> {console.log(err)
})

  
}
  return (
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>

              {/* First name */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="firstName" name='firstName' onChange={(e)=>handleData(e)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="firstName">First Name</label>
                  </div>

                </div>

                {/* Last name */}
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="lastName" name='lastName'
                     onChange={(e)=>handleData(e)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                      name='birthDate'
                      onChange={(e)=>handleData(e)}
                    />
                    <label htmlFor="birthdayDate" className="form-label">Date of Birth</label>
                  </div>
                </div>

                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="femaleGender"
                      value="Female"
                      onChange={(e)=>handleData(e)}
                    />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="maleGender"
                      value="Male"
                      onChange={(e)=>handleData(e)}
                    />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="otherGender"
                      value="Other"
                      onChange={(e)=>handleData(e)}
                    />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" name='email'
                    onChange={(e)=>handleData(e)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" name='phoneNumber'
                      onChange={(e)=>handleData(e)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              {/* Speacialist Assigned */}
              <div className="row">
                <div className="col-12 mb-4">

                  <select className="select form-control-lg" name='specialist'
                  onChange={(e)=>handleData(e)}>
                    <option value="0" disabled>Choose option</option>

                  {  SpList.map((item,index)=>{ return <option key={index} value={item}>{item}</option>})}

                  </select>
                  <label className="form-label select-label">Doctor Specialiaztion</label>

                </div>
              </div>

              {/* Brief Symptoms */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="Symptoms" name='symptom' 
                    className="form-control form-control-lg" onChange={(e)=>handleData(e)}/>
                    <label className="form-label" htmlFor="firstName">Brief Symptoms</label>
                  </div>

                </div>

                {/* Other Health issues */}
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="Medhistory" name='medHistory' 
                    onChange={(e)=>handleData(e)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="lastName">Previous medical history (if any)</label>
                  </div>

                </div>
              </div>
             

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" 
                onClick={(e)=>handleSubmit(e)} value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Form