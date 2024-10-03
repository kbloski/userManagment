'use client';
import style from './login.module.css';
// import { useState } from "react";


export default function LoginPage() {
    // const user = useState();

    return (
            <div className={style.container}>
                <div className={style.bg}>
                    <div className={style['bg-rect']}></div>
                    <div className={style['bg-rect']}></div>
                </div>
                <form className={style.form}>
                    <div className={style['form-icon']}></div>
                    <div className={style['input-container']}>
                        <input type="text" id="username" placeholder=" " className={style['form-input']} />
                        <label htmlFor="username" className={style['form-label']}>Username</label>
                    </div>
                    <div className={style['input-container']}>
                        <input type="password" id="password" placeholder=" " className={style['form-input']}/>
                        <label htmlFor="password" className={style['form-label']}>Password</label>
                    </div>
                    <div className={style['form-spacer']}></div>
                    <button type='submit' className={style['button-submit']}>Login</button>
                </form>
            </div>
    )
}