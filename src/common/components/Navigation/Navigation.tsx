import { logOut } from '@/common/services/authService';
import style from './navigation.module.css'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useLogged } from '@/common/hooks/useLogged';
import { isAllowedByPriorityForRole } from '@/common/utils/accessbility/rolePermission';
import { UserRoles } from '@/common/types/UserType';

export function Navigation() {
    const logged = useLogged();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(logged.isLoggedIn)
    }, [logged.isLoggedIn]);

    function onLogOut() {
        logOut();
    }

    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li>
                    <Link href={'/'}>HomePage</Link>
                </li>
                {!isLogged && <>
                    <li>
                        <Link href={'/login'}>Login</Link>
                    </li>
                </>}
                {isLogged && <>
                    <li>
                        <Link href={'/login'}>Dashboard</Link>
                    </li>

                    {isAllowedByPriorityForRole(
                        UserRoles.SUPPORT, 
                        logged.user?.role
                    ) && <>
                        <li>
                            <Link href={'/support'}>Support</Link>
                        </li>
                    </>}



                    <li>
                        <Link href='/' onClick={onLogOut}>Logout</Link>
                    </li>
                </>
                }
            </ul>
        </nav>
    )
}