import { ManagerUserPanel } from '@/common/components/ManagerUserPanel/ManagerUserPanel';
import style from './manager.module.css';

export default function ManagerPage(){

    return <div className={style.container}>
       <h1>Manager Panel</h1>
       <ManagerUserPanel />
    </div>
}