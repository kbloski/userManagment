'use client';
// import style from './login.module.css';
// import { useState } from "react";


export default function LoginPage(){
    // const user = useState();

    return(
        <>
            <div className='container'>
                <form>
                    <div>
                        <input type="text" id="username" placeholder=" "/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="password" id="password" placeholder=" "/>
                        <label htmlFor="password">Username</label>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    ) 
}