import React from 'react'
import "./Header.css"
const Header = () => {
    return (
                <>
                    <div className='navBar'>
                        <div>
                            <div>
                                <div><a href="/"><div className='main'><h3>Home</h3></div></a></div>
                                <div><a href="/registration"><div className='main'><h3>registration</h3></div></a></div>
                                <div><a href="/forgetpassword"><div className='main'><h3>forgetpassword</h3></div></a></div>
                            </div>
                        </div>
                    </div>
                </>
            )       }

export default Header;
