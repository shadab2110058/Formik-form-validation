import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import react,{useState} from 'react';
const passwordToggle = () => 
{
    const [ visible,setVisibility ] =useState(false);
    const Icon = (
        <FontAwesomeIcon icon = { visible ? 'faEyeSlash' : 'faEye'} />
    )

    const inputType = visible ? 'text':'password'


return [ inputType,Icon]
    }
export default passwordToggle
