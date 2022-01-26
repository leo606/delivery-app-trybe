import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import md5Serialize from '../../helpers/md5Serialize';
import { getUser } from '../../redux/actions/user/getUser';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('none');

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
      setWarning('block');
      return true;
    } catch (e) {
      return e.message;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getUser({ email }));
    if (postRegister()) navigate('/products');
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
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
        <button type="submit" data-testid="common_register__button-register">
          REGISTER
        </button>
      </form>
      <p
        data-testid="common_register__element-invalid_register"
        style={ { display: warning } }
      >
        Dados inválidos
      </p>
    </div>
  );
}

export default Register;
