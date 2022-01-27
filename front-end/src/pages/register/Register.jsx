import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import md5Serialize from '../../helpers/md5Serialize';
import { registerValidate } from '../../helpers/formValidations';

function Register() {
  const navigate = useNavigate();

  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('none');
  const [warningMessage, setWarningMessage] = useState('Dados inválidos');

  function handleChange({ target: { value, name } }) {
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }

  async function postRegister() {
    const created = 201;
    const data = JSON.stringify({
      name: fullName,
      email,
      password: md5Serialize(password),
    });

    const config = {
      method: 'post',
      url: 'http://localhost:3001/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    try {
      const result = await axios(config);

      if (result.status !== created) {
        return false;
      }
      localStorage.setItem('user', JSON.stringify(result.data));
      return true;
    } catch (e) {
      return { status: e.response.status, message: e.response.data.message };
    }
  }

  async function registerButton(e) {
    e.preventDefault();
    const registerResponse = await postRegister();
    if (registerResponse === true) return navigate('/customer/products');
    setWarningMessage(registerResponse.message);
    setWarning('block');
  }

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Seu nome"
          value={ fullName }
          name="name"
          onChange={ handleChange }
        />
        <input
          type="email"
          data-testid="common_register__input-email"
          placeholder="email@tryber.com.br"
          value={ email }
          name="email"
          onChange={ handleChange }
        />
        <input
          type="password"
          data-testid="common_register__input-password"
          placeholder="********"
          value={ password }
          name="password"
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ !registerValidate(email, password, fullName) }
          onClick={ registerButton }
        >
          REGISTER
        </button>
      </form>
      <p
        data-testid="common_register__element-invalid_register"
        style={ { display: warning } }
      >
        { warningMessage }
      </p>
    </div>
  );
}

export default Register;
