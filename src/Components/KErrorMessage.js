import "./KErrorMessage.css";
import React from "react";
import { ErrorMessage } from "formik";

const KErrorMessage = ({ name }) =>{
   return (
    <div className="KError" style = {{color:"red"}}>
    <ErrorMessage name ={ name } />
    <br/>
    </div>
   )
}


export default KErrorMessage;