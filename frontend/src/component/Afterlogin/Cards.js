import React from 'react'



const Cards = (props) => { 

  const data = props.props
  


  return (
    data[0] ?
    data.map((item)=>{  
      return(
      (<div key={item._id} className="card" style={{width: "18rem",margin:"1em"}}>
      {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
      <div className="card-body">
        <h5 className="card-title">Name : {item.firstName} {item.lastName}</h5>
        <p className="card-text">DOB : {item.birthDate} </p>
        <p className="card-text">Gender : {item.gender} </p>
        <p className="card-text">Symptoms : {item.symptom} </p>
        <p className="card-text">Med.history : {item.medHistory} </p>
        <p className="card-text">Specialist : {item.specialist} </p>
        <p className="card-text">Email : {item.email} </p>
        <p className="card-text">Mob.No. : {item.phoneNumber}</p>
        <p className="card-text">Created : {item.createdAt}</p>

        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>))  
    })
    :null
  
  )
}

export default Cards