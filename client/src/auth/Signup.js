import React, { useState } from 'react';
import Axios from 'axios';

const Signup = () => {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
          username: usernameReg, 
          password: passwordReg
        }).then((response) => {
          console.log(response);
        });
      };

    return (
        <main>
            <h1>Rejestracja</h1>
            <div className="signup">
                <label htmlFor="signup-username">Nazwa użytkownika:</label>
                <input type="text" name="signup-username" onChange={(e) => {setUsernameReg(e.target.value)}} />

                <label htmlFor="signup-password">Hasło:</label>
                <input type="password" name="signup-password" onChange={(e) => {setPasswordReg(e.target.value)}} />

                <button onClick = { register }>Zarejestruj</button>
            </div>
        </main>
    );
}
 
export default Signup;