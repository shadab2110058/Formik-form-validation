import "./Registration.css";
import { Formik, Form, Field } from "formik";
import KErrorMessage from "./KErrorMessage";
import * as yup from "yup"
import React from "react";
import react,{ useState } from "react"

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/icomoon/eye'
import {eyeBlocked} from 'react-icons-kit/icomoon/eyeBlocked'

function Registration() {

 const [ type,setType ] = useState('password');
 const [ icon ,setIcon ] = useState(eye);

 const [ type1,setType1 ] = useState('password');
 const [ icon1 ,setIcon1 ] = useState(eye);


 const handdleToggle=()=>{
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

 const handleToggle=()=>{
  if(type1==='password')
  {
     setIcon1(eyeBlocked);
     setType1('text');
  }
  else{
    setIcon1(eye);
     setType1('password');
  }
 }


  
    const validationSchema = yup.object({
    name: yup.string().min(2).max(25).required("*Required"),
    roll_no: yup.number().typeError("roll_number must be number").min(1000000000000, "at least 13 digits should be present").max(9999999999999, "at least 13 digits should be").required("*Required"),
    student_number: yup.number().typeError("student_number must be number").min(1000000, "at least 7 digits should be present").max(9999999, "at least 7 digits should be present").required("*Required"),
    email: yup.string().required("*Required"),
    password: yup.string().typeError("roll_number must be number").min(5).max(12).required("*Required"),
    // .matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)
    confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords does't match")

      
  })

  

  return (
    <>
   
    < div className="main">
      <div className="registrationForm">

        <Formik initialValues={{ name: "", roll_no: "", student_number: "", email: "", password: "", confirm_password: "" }} onSubmit={(values) => { localStorage.setItem("key",JSON.stringify(values))
        const val = JSON.parse(localStorage.getItem('values'));
        if(val)
        {
           val.forEach((values)=>(values))
        }
        }}
          validationSchema={validationSchema}>
          <div className="formDiv">

            <Form className="form">

              <h1 className="heading">Registration Form</h1>

              <Field name="name" type="text"  placeholder="Enter Your Name" className="field" ></Field>
              <KErrorMessage name="name" />
              

              <Field name="roll_no" type="text"  placeholder="University Roll Number" className="field"></Field>
              <KErrorMessage name="roll_no" />
             

              <Field name="student_number" type="text"  placeholder="Student Number" className="field"></Field>
              <KErrorMessage name="student_number" />
             
               <select name="branch" type="text"  className="optionTag" >
                <option>Branch</option>
                <option>Civil</option>
                <option>CS</option>
                <option>CSE</option>
                <option>CSE-AIML</option>
                <option>CSE-DS</option>
                <option>CSIT</option>
                <option>ECE</option>
                <option>Electrical</option>
                <option>IT</option>
                <option>Mechanical</option>
              </select>
              <KErrorMessage name="branch" />
             

              <Field name="email" type="email"  placeholder="Email" className="field"></Field>
              <KErrorMessage name="email" />
             

               <div className="passwordDiv">
              <Field name="password"  type={type}  placeholder="Password"  className="field" ></Field>
              <span className="Icon" onClick={handdleToggle}><Icon icon={icon}size={20} /></span>
              <KErrorMessage name="password"/>
              </div>   
              {/* <br/>   */}
             
              
              <div className="passwordDiv">
              <Field name="confirm_password" type={type1}  id="show1" placeholder="Confirm_Password" className="field"></Field>
              <KErrorMessage name="confirm_password" /><span className="Icon1" onClick={handleToggle}><Icon icon={icon1} size={20}/></span>
              </div>
              {/* */}
              <button type="submit"  className="field" id="submit">Submit</button><br/>
              

            </Form>
          </div>
        </Formik>
      </div>
    </div>
    </>
  )
}
export default Registration;