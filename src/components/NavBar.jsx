import { NavLink } from "react-router-dom";
import { CloseIcon } from "./icons/CloseIcon";
import { MenuIcon } from "./icons/MenuIcon";


import '../styles/components/NavBar.scss';



function NavBar() {
    return (
        <nav className='navBar'>
            
            <input className="navBar__button" id="menu__button" type="checkbox" />

            <label className="navBar__icon" htmlFor="menu__button">
                <MenuIcon className="navBar__icon--menu"/>
                <CloseIcon className="navBar__icon--close"/>

            </label>                    

            <ul className='navBar__menu'>
                <NavLink className={({ isActive }) => `navBar__menu__item ${ isActive ? 'navBar__menu__item--isActive' : ''}`} to="/" >Box Shadow</NavLink>
                <NavLink className={({ isActive }) => `navBar__menu__item ${ isActive ? 'navBar__menu__item--isActive' : ''}`} to="/text-shadow" >Text Shadow</NavLink>
                <NavLink className={({ isActive }) => `navBar__menu__item ${ isActive ? 'navBar__menu__item--isActive' : ''}`} to="/glass" >Glass Morphism</NavLink>
            </ul>

        </nav>
    );
}

export default NavBar;