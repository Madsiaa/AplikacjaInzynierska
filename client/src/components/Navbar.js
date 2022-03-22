import { Link } from 'react-router-dom';

const Navbar = () => {
    let userRole = localStorage.getItem('userRole');

    const logoutUser = () => {
        let userName = localStorage.getItem('userName');
    
        if(userName) {
            localStorage.removeItem('userName');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userFavProduct');
            localStorage.removeItem('userFavRecipe');
            localStorage.removeItem('userCreateDate');
        }
    }

    return ( 
        <nav className="navbar">
            <div className="left">
                <Link to="/">Strona główna</Link>
                <Link to="/produkty">Produkty</Link>
                <Link to="/diety">Diety</Link>
                <Link to="/przepisy">Przepisy</Link>
            </div>   
            {userRole
                ? <div className="right"><Link to="/konto" className='account'>Moje konto</Link><Link to="/wyloguj" className='signout'><button onClick={ logoutUser }>Wyloguj</button></Link></div>
                : <div className="right"><Link to="/zaloguj" className='login'>Zaloguj</Link><Link to="/zarejestruj" className='register'>Zarejestruj się</Link></div>
            }
        </nav>
    );
}
 
export default Navbar;