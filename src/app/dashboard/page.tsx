'use client'
import { UserInfo } from '@/common/components/UserInfo/UserInfo';
import style from './dashboard.module.css';

export default function DashboardPage(){
    return (
        <div className={style.container}>
            <UserInfo />
        </div>
    )
}