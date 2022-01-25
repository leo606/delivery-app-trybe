import React, { useState } from 'react';
import { loginValidate } from '../../helpers/formValidations';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('none');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const loginButton = (e) => {
    e.preventDefault();
    if (warning === 'none') setWarning('block');
  };

  return (
    <div id="loginComponent">
      <form id="loginForm" className="loginForm">
        <div id="inputs" className="inputs">
          <input
            type="email"
            data-testid="common_login__input-email"
            placeholder="email@tryber.com.br"
            value={ email }
            name="email"
            onChange={ handleChange }
          />
          <input
            type="password"
            data-testid="common_login__input-password"
            placeholder="********"
            value={ password }
            name="password"
            onChange={ handleChange }
          />
        </div>
        <div id="buttons" className="buttons">
          <button
            type="submit"
            data-testid="common_login__button-login"
            onClick={ loginButton }
            disabled={ !loginValidate(email, password) }
          >
            LOGIN
          </button>
          <button type="button" data-testid="common_login__button-register">
            Ainda não tenho conta
          </button>
        </div>
      </form>
      <p
        id="warning"
        className="warning"
        data-testid="common_login__element-invalid-email"
        style={ { display: warning } }
      >
        Aviso: email ou senha incorretos
      </p>
    </div>
  );
}

export default Login;
