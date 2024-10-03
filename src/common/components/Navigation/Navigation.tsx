import {  logOut } from '@/common/services/authService';
import style from './navigation.module.css'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useLogged } from '@/common/hooks/useLogged';

export function Navigation() {
    const logged = useLogged();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged( logged.isLoggedIn )
    }, [logged.isLoggedIn]);
    
    function onLogOut(){
        logOut();
    }

    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link href={'/'}>HomePage</Link>
                </li>
                { !isLogged && <>
                    <li className={style.li}>
                        <Link href={'/login'}>Login</Link>
                    </li>
                </>}
                { isLogged && <>
                    <li className={style.li}>
                        <Link href={'/login'}>Dashboard</Link>
                    </li>
                    <li className={[style.liLogOut, style.li].join(' ')}>
                        <Link href='/' onClick={onLogOut}>Logout</Link>
                    </li>
                </> 
                }
            </ul>
        </nav>
    )
}