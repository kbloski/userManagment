import { ManagerUserPanel } from '@/common/components/ManagerUserPanel/ManagerUserPanel';
import style from './manager.module.css';

export default function ManagerPage(){

    return <div className={style.container}>
       <h1>Manager Panel</h1>
       <p>Panel dla menadzera do zarządzania treściami.</p>
       <ManagerUserPanel />
    </div>
}