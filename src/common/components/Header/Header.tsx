import style from './header.module.css';
import { Navigation } from "../Navigation/Navigation";

export function Header(){
      return  <header className={style.header}>
            <Navigation />
        </header>
}