'use client'
import { UserInfo } from '@/common/components/UserInfo/UserInfo';
import style from './dashboard.module.css';
import { useLogged } from '@/common/hooks/useLogged';

export default function DashboardPage() {
    const { user } = useLogged();

    return (
        <div className={style.container}>
            <section>
                <UserInfo />
                <h1 className={style.h1}>Dzień dobry, {user?.username}!</h1>
            </section>
            <section className={style['section-notyfications']}>
                <h2>Powiadomienia: </h2>
                <ul className={style.notyfications}>
                    <li>
                        Twoje konto zostało zalogowane z nowego urządzenia.
                    </li>
                    <li>
                        Twoja subskrypcja zostanie odnowiona za 3 dni.
                    </li>
                    <li>
                        Ostatnie logowanie: 10 października 2024, 12:34
                    </li>
                    <li>
                        Wkrótce zaktualizujemy regulamin. Zapoznaj się z nowymi warunkami.
                    </li>
                </ul>
            </section>
        </div>
    )
}