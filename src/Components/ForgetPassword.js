import React from 'react'
import { Formik , Form , Field } from "formik"
import "./ForgetPassword.css"
const ForgetPassword = () => {
  return (
    <div className='main'>
         <div className='form'>
         <h2 className='spanText'>Reset Your Password</h2>
         The varification mail will be sent to your email.
         <br/>
         Please check it.
         <h3>Email</h3>
         <Formik initialValues={{email:""}}>
         <Form>
              <Field name="email" type="email" placeholder="Email" className="field" style = {{ paddingLeft:".5rem"}}></Field> 
              <div className='send'><button style={{color:"blue"},{marginTop:"1rem"}}>Send</button></div>
              <div className='backToLogin'><a href="/" style={{textDecoration:"none"}}><label> Back to Login</label></a></div>
         </Form>
         </Formik>
       </div>

         </div>
   
  )
}

export default ForgetPassword
