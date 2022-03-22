import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post('http://localhost:3001/login', {
          username: usernameLog, 
          password: passwordLog
        }).then((response) => {
          setLoginStatus(response.data.message);
          localStorage.setItem('userName', response.data.user_name);
          localStorage.setItem('userRole', response.data.user_role);
          localStorage.setItem('userCreateDate', response.data.user_createDate);
          localStorage.setItem('userFavProduct', response.data.user_fav_product);
          localStorage.setItem('userFavRecipe', response.data.user_fav_recipe);
          alert('Zalogowano!');
        });
      };

    return (
        <main>
            <h1>Logowanie</h1>
            <div className="form-login-signup">
                <label htmlFor="login-username">Nazwa użytkownika:</label>
                <input type="text" name="login-username" onChange={(e) => {setUsernameLog(e.target.value)}} />

                <label htmlFor="login-password">Hasło:</label>
                <input type="password" name="login-password" onChange={(e) => {setPasswordLog(e.target.value)}} />

                <button onClick = { login }>Zaloguj</button>
            </div>
            <h2>{ loginStatus }</h2>
        </main>
    );
}
 
export default Login;