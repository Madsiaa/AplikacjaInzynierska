import Axios from 'axios';
import { useState } from 'react';

const AddAdmin = () => {
    const [userName, setUserName] = useState('');

    const addNewAdmin = () => {
        Axios.post('http://localhost:3001/add-new-admin', {
            userName: userName, 
        }).then(() => {
            alert('Pomyślnie dodano przepis do bazy!');
        })
    };

    return (
        <div className="form">
            <label htmlFor="">Nazwa użytkownika</label>
            <input type="text" onChange={ (event) => { setUserName(event.target.value) } }/>

            <button onClick={ addNewAdmin }>Nadaj admina</button>
        </div>
    );
}
 
export default AddAdmin;