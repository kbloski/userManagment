'use client';
import { UserType } from '@/common/types/UserType';
import style from './login.module.css';
import { ChangeEvent, useState } from "react";
import { error } from 'console';
import { USER_KEY_LOCALSTORAGE } from '@/common/config';


export default function LoginPage() {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState<string>();

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser(prev => {
            const newUser: Record<string, string> = { ...prev }
            newUser[name] = value;
            return newUser;
        })
    }

    const submitAction = (event: React.FormEvent) => {
        event.preventDefault();

        fetch('/api/user',
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify( user ),
            }
        ).then( 
            response => {
                if (!response.ok) throw new Error( String(response.status) )
                    return response.json()
            }
        )
        .then( data => {
            setMessage(undefined);
            const dataJson = JSON.stringify(data.user)
            localStorage.setItem( USER_KEY_LOCALSTORAGE, dataJson)
            window.location.href = '/dashboard'
        })
        .catch( err => { 
            if (err.message == '404') setMessage('Ten użtkownik nie istnieje');
            if (err.message == '400') setMessage('Błędne dane logowania');
        } )
    }

    return (
        <div className={style.container}>
            <div className={style.bg}>
                <div className={style['bg-rect']}></div>
                <div className={style['bg-rect']}></div>
            </div>
            <form className={style.form} onSubmit={submitAction}>
                <div className={style['form-icon']}></div>
                { message && <>
                    <p className={style.callback}>
                        {message}
                    </p>
                </>}
                <div className={style['input-container']}>
                    <input type="text" id="username" name='username' placeholder=" " className={style['form-input']}  onChange={handlerChange}/>
                    <label htmlFor="username" className={style['form-label']}>Username</label>
                </div>
                <div className={style['input-container']}>
                    <input type="password" id="password" name='password' placeholder=" " className={style['form-input']}onChange={handlerChange} />
                    <label htmlFor="password" className={style['form-label']}>Password</label>
                </div>
                <div className={style['form-spacer']}></div>
                <button type='submit' className={style['button-submit']}>Login</button>
            </form>
        </div>
    )
}