import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import md5 from 'md5';
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
    const data = JSON.stringify({
      name: fullName,
      email,
      password: md5(password),
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

      return { data: result.data, status: result.status };
    } catch (e) {
      return null;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getUser({ email }));

    const returnApi = postRegister();
    const created = 201;
    if (returnApi.status !== created) {
      setWarning('block');
    } else {
      return navigate('/products');
    }
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
        {}
        <button type="submit" data-testid="common_register__button-register">
          REGISTER
        </button>
      </form>
      <span data-testid="common_register__element-invalid_register" display={ warning }>
        Dados inválidos
      </span>
    </div>
  );
}

export default Register;
