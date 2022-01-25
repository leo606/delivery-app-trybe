import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div>
      <form>
        <Input
          type="email"
          testId="common_login__input-email"
          placeholder="email@tryber.com.br"
          value={ email }
          name="email"
          onChange={ handleChange }
        />
        <Input
          type="password"
          testId="common_login__input-password"
          placeholder="********"
          value={ password }
          name="password"
          onChange={ handleChange }
        />
        <button type="submit" data-testid="common_login__button-login">LOGIN</button>
        <button type="button" data-testid="common_login__button-register">
          <Link to="/register">
            Ainda não tenho conta
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
