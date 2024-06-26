import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return <nav>
        <NavLink  className={({ isActive }) => isActive ? styles.active : ""} to={'/'} >Home</NavLink>
        <Link  to={'/users'} >Users</Link>
    </nav>
}

export default Header;
