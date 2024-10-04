import { SupportTicketList } from '@/common/components/SupportTicketList/SupportTicketList';
import style from './support.module.css';

export default function SupportPage(){
    return <div className={style.container}>
        <h1>Zarządzenie wspraciem</h1>
        <section>
            <p>Twoja wydajność: {Math.floor(Math.random()*100)}%</p>
        </section>
        <SupportTicketList />
    </div>
}