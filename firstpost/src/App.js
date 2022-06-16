import axios from 'axios';
import { useState,useEffect } from 'react';
import Header from './components/Header'
import {AllRoute} from './AllRoute';
import Home from './pages/Home';

import data from './db'
import Footer from './components/Footer';
import Homedata from './pages/Homedata';



function App() {

  // const [loading,setLoading]= useState(true);
  // const [error,setError]= useState(false);
  // const [data,setData]= useState([]);
  

  // useEffect(() => {
  
  //   setLoading(true);
  //   axios({
  //     method: 'get',
  //     url: "http://localhost:3003/posts",
      
  //   })
  //   .then(res => {
  //     setData(res.data);
  //     setLoading(false);
  //   })
  //   .catch(err => {
  //     setError(true);
  //     setLoading(false);
  //   })
  // },[])

// console.log(data)

  return (
    <div className="App">
      <Header/>
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
