import { Link } from 'react-router-dom';

const Signout = () => {
    return (
        <main>
            <h1>Wylogowano</h1>
            <Link to="/" className='link'>Powrót do strony głównej</Link>
        </main>
    );
}
 
export default Signout;