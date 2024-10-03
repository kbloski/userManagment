'use client'
import { isLoggedIn, logOut } from '@/common/services/authService';
import style from './navigation.module.css'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRefresh } from '@/common/hooks/refreshComponent';

export function Navigation() {
    const refreshComponent = useRefresh();
    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(isLoggedIn());
    }, [refreshComponent.switchValue]);

    function onLogOut(){
        logOut();
        refreshComponent.refresh();
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