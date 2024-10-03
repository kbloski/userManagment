import { isLoggedIn, logOut } from '@/common/services/authService';
import style from './navigation.module.css'
import Link from "next/link";

export function Navigation() {
    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link href={'/'}>HomePage</Link>
                </li>
                { !isLoggedIn() && <>
                    <li className={style.li}>
                        <Link href={'/login'}>Login</Link>
                    </li>
                </>}
                { isLoggedIn() && <>
                    <li className={style.li}>
                        <Link href={'/login'}>Dashboard</Link>
                    </li>
                    <li className={[style.liLogOut, style.li].join(' ')}>
                        <Link href='/' onClick={logOut}>Logout</Link>
                    </li>
                </>
                }
            </ul>
        </nav>
    )
}