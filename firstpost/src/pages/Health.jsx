import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import data from '../db'


function Healthpage({
  img,category,title,desc
}) {


return (
      <>
      
 
      <div style={{width:"42%",height:"650px",margin:"auto"}}>
      
      <div >
          <a href="https://www.firstpost.com/health/from-covid-19-test-for-infants-to-breastfeeding-babies-if-positive-all-you-need-to-know-if-your-child-gets-infected-10721841.html">
            <img style={{width:"100%"}} src={img}/>
            </a>
      </div>

      
      <div style={{borderBottom:"4px solid #f3a342",width:"70px",marginBottom:"10px"}}>{category}</div>
      <p style={{ font: "Playfair Display",fontSize: "25px",fontWeight: "bold" }}>{title}</p>
      <div >{desc}</div>
      
  </div>
  </>
)
}

const Health = () => {
  // const navigate=useNavigate();
  // const [loading,setLoading]= useState(true);
  // const [error,setError]= useState(false);
  // const [data,setData]= useState([]);
  

//   useEffect(() => {
  
//     setLoading(true);
//     axios({
//       method: 'get',
//       url: "http://localhost:3003/health",
      
//     })
//     .then(res => {
//       setData(res.data);
//       setLoading(false);
//     })
//     .catch(err => {
//       setError(true);
//       setLoading(false);
//     })
//   },[])

// console.log(data)

  return (
    <>
    <p style={{marginBottom:"20px",marginTop:"30px",marginLeft:"660px",fontWeight:"600",width:"210px",fontSize:"30px",borderBottom:"5px solid #f3a342"}}>HEALTH NEWS</p>
    <div>
        {
          data.health.map(item =>
            <Healthpage key={item.id} {...item}/>
            )
        }
      </div>
      </>
  )
}

export default Health;