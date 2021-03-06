import './Header.scss';

function Header() {
    return (
        <nav className='navBar'>

            <label class="navBar__icon" for="menu__button">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                </svg>
            </label>
                    
            <input class="navBar__button" id="menu__button" type="checkbox" />

            <ul className='navBar__menu'>
                <li className='navBar__menu__item'><a href="/">Box Shadow</a></li>
                <li className='navBar__menu__item'><a href="/text-shadow">Text Shadow</a></li>
                <li className='navBar__menu__item'><a href="/glass">Glass Morphism</a></li>
            </ul>

        </nav>
    );
}

export default Header;