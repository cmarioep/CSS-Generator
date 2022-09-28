import { NavLink } from "react-router-dom";


import '../styles/components/Header.scss';



function Header() {
    return (
        <nav className='navBar'>

            <label className="navBar__icon" htmlFor="menu__button">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                </svg>
            </label>
                    
            <input className="navBar__button" id="menu__button" type="checkbox" />

            <ul className='navBar__menu'>
                <NavLink className={({ isActive }) => `navBar__menu__item ${ isActive ? 'navBar__menu__item--isActive' : ''}`} to="/" >Box Shadow</NavLink>
                <NavLink className={({ isActive }) => `navBar__menu__item ${ isActive ? 'navBar__menu__item--isActive' : ''}`} to="/text-shadow" >Text Shadow</NavLink>
                <NavLink className={({ isActive }) => `navBar__menu__item ${ isActive ? 'navBar__menu__item--isActive' : ''}`} to="/glass" >Glass Morphism</NavLink>
            </ul>

        </nav>
    );
}

export default Header;