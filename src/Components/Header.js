import './Header.scss';

function Header() {
    return (
        <nav className='navBar'>
            <ul className='navBar__menu'>
                <li className='navBar__menu__item'><a href="/">Box Shadow</a></li>
                <li className='navBar__menu__item'><a href="/text-shadow">Text Shadow</a></li>
                <li className='navBar__menu__item'><a href="/glass">Glass Morphism</a></li>
            </ul>
        </nav>
    );
}

export default Header;