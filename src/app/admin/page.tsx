import style from './admin.module.css';

export default function AdminPage() {
    return <div className={style.container}>
        <h1>Admin Panel</h1>
        <h3>Dziękuję!</h3>
        <p>
            Serdecznie dziękuje za skorzystanie z mojej aplikacji.    
            Mam nadzieję, że spełniła ona Twoje oczekiwania!
        </p>
    </div>
}