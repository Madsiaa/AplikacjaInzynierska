import Axios from 'axios';
import { useState } from 'react';

const AddAdmin = () => {
    const [userName, setUserName] = useState('');

    const addNewMod = () => {
        Axios.post('http://localhost:3001/add-new-mod', {
            userName: userName, 
        }).then(() => {
            alert('Pomyślnie zmieniono rolę!');
        })
    };

    const addNewAdmin = () => {
        Axios.post('http://localhost:3001/add-new-admin', {
            userName: userName, 
        }).then(() => {
            alert('Pomyślnie zmieniono rolę!');
        })
    };

    return (
        <div className="add-admin-form">
            <h2>Nadaj rolę użytkownikowi</h2>
            <label htmlFor="">Nazwa użytkownika</label>
            <input type="text" onChange={ (event) => { setUserName(event.target.value) } }/>

            <button onClick={ addNewMod }>Nadaj rolę moderatora</button>

            <label htmlFor="">Nazwa użytkownika</label>
            <input type="text" onChange={ (event) => { setUserName(event.target.value) } }/>

            <button onClick={ addNewAdmin }>Nadaj rolę admina</button>
        </div>
    );
}
 
export default AddAdmin;