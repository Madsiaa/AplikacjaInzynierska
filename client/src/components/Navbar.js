import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    /*
    const checkUserRole = (Role) => {
        if(!Role) {
            document.getElementsByClassName('account').style.display = 'none';
            document.getElementsByClassName('signout').style.display = 'none';
        } else {
            document.getElementsByClassName('login').style.display = 'none';
            document.getElementsByClassName('register').style.display = 'none';
        }
    }
    */
    
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
    
    //useEffect(() => {
    //    let userRole = localStorage.getItem('userRole');
    //    checkUserRole(userRole);
    //}, [userRole]);

    return ( 
        <nav className="navbar">
            <div className="left">
                <Link to="/">Strona główna</Link>
                <Link to="/produkty">Produkty</Link>
                <Link to="/diety">Diety</Link>
                <Link to="/przepisy">Przepisy</Link>
            </div>   
            <div className="right">
                <Link to="/zaloguj" className='login'>Zaloguj</Link>
                <Link to="/zarejestruj" className='register'>Zarejestruj się</Link>
                <Link to="/konto" className='account'>Moje konto</Link>
                <Link to="/wyloguj" className='signout'><button onClick={ logoutUser }>Wyloguj</button></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;