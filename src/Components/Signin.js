import React from 'react';
import "./Signin.css"      
import * as yup from "yup"
import { Link } from "react-router-dom";
// import KErrorMessage from "./KErrorMessage";
// import ReCAPTCHA from 'react-google-recaptcha';
// import Recaptcha from "./Recaptcha";
import { Formik, Form, Field } from "formik";
import { Icon } from 'react-icons-kit'
import {mail} from 'react-icons-kit/icomoon/mail'
import {key} from 'react-icons-kit/icomoon/key'
import {eye} from 'react-icons-kit/icomoon/eye'
import {eyeBlocked} from 'react-icons-kit/icomoon/eyeBlocked'
import react,{ useState } from "react"


const Signin = () => {

  const [ type,setType ] = useState('password');
 const [ icon ,setIcon ] = useState(eye);

 const handdleToggle1=()=>{
  if(type==='password')
  {
     setIcon(eyeBlocked);
     setType('text');
  }
  else{
    setIcon(eye);
     setType('password');
  }
 }

  const validationSchema = yup.object({
  email: yup.string().required("*Required"),
  password: yup.string().min(5).max(12).matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/).required("*Required"),
  })
  const getdata = localStorage.getItem("key");
// console.log(getdata);

  return (
    <div className='mainDiv'>

      <Formik initialValues={{ email: "", password: "",}} onSubmit={(values) => { localStorage.setItem("key",JSON.stringify(values))}}>
        <Form className='form'>
          <h2 className='heading'>Login</h2>
          <span className="key" ><Icon icon={mail} size={18}/></span>
          <Field name="email" type="text"  placeholder="Email" className="input" style={{ padding: "0px 0px 0px 25px" }}></Field>
          {/* <KErrorMessage name="email" /> */}

          <span className="key" ><Icon icon={key} size={18}/></span>
          <Field name="password" type={type}   placeholder="Password" className="input" style={ { padding: "0px 0px 0px 25px" }}></Field>
          {/* <KErrorMessage name="password" /> */}
          <span className="Icon2" onClick={handdleToggle1}><Icon icon={icon} size={20} /></span>

          <label><h5 style={{ color: "blue" }}><a href="/forgetpassword" style={{textDecoration:"none"}}>forget password ?</a></h5></label>
          <div className='signInDiv'>
            <div className='signInText' name="submit"><button>Sign In</button></div>
          </div>
          <div className='checkAccount'>Don't have a account?<a href="/registration" style={{textDecoration:"none"}}><span className='span'>register</span> </a></div>

        </Form>
      </Formik>
    </div>
  )
}

export default Signin;