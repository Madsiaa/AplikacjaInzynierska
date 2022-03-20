import { Link } from 'react-router-dom';

const logoutUser = () => {
    let userName = localStorage.getItem('userName');
    let userRole = localStorage.getItem('userRole');

    if(userName && userRole) {
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
    }
}

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="left">
                <Link to="/">Strona główna</Link>
                <Link to="/produkty">Produkty</Link>
                <Link to="/diety">Diety</Link>
                <Link to="/przepisy">Przepisy</Link>
            </div>   
            <div className="right">
                <Link to="/zaloguj">Zaloguj</Link>
                <Link to="/zarejestruj">Zarejestruj się</Link>
                <Link to="/konto">Moje konto</Link>
                <Link to="/wyloguj"><button onClick={ logoutUser }>Wyloguj</button></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;