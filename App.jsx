import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Login';
import Form from './Form';
import { Routes, Route } from "react-router-dom";
import Apifetch from './Apifetch';
import Dash from './Dash';




const App = () => {
 
  const Api_url = "https://jsonplaceholder.typicode.com/users";

  const [details, setdetails] = useState(
    {
      shopname: "",
      gstnumber: "",
      mobile: "",
      altermobile: "",
      email: "",
      sub: "",
      distype: "",
      subtype: "",
      acprice: "",
      dis: "",
      disprice: "",
      address: "",
      pincode: "",
      country: "",
      state: "",
      city: "",
      landmark: "",
      about: ""

    }
  );
  const [vendor, setvendor] = useState([]);
  const [newerror, setnewerror] = useState("");
 
  const add = async() => {
    let newvendor = {
      id: vendor.length + 1, ...details
      
    }
    console.log("Okkkk")
    setvendor([newvendor, ...vendor]);
    setdetails(
      {
        shopname: "",
        gstnumber: "",
        mobile: "",
        altermobile: "",
        email: "",
        sub: "",
        distype: "",
        subtype: "",
        acprice: "",
        dis: "",
        disprice: "",
        address: "",
        pincode: "",
        country: "",
        state: "",
        city: "",
        landmark: "",
        about: ""

      }
    )
    const optionpost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newvendor)
    }
    const result = await Apifetch({ url: Api_url, optionobj: optionpost })
    if (result) {
      setnewerror(result)
    }

  }

  return (


    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Form" element={<Form details={details} setdetails={setdetails} add={add} />} />
       <Route path="/Dashboard" element={<Dash />} />
    </Routes>


  )
}

export default App