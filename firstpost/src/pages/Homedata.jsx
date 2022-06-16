import React from 'react'
import Home from './Home'
import data from '../db' 


const Homedata = () => {
  return (
    <>
    <div></div>
    <div><img style={{margin:"auto",marginTop:"30px"}} src="https://tpc.googlesyndication.com/simgad/7937691974444879532"/>
    <p style={{marginBottom:"20px",marginTop:"30px",marginLeft:"660px",fontWeight:"600",width:"210px",fontSize:"30px",borderBottom:"5px solid #f3a342"}}>THE BIG STORY</p>
    <div>
        {
          data.posts.map(item =>
            <Home key={item.id} {...item}/>
            )
        }
      </div></div>
      </>
  )
}

export default Homedata