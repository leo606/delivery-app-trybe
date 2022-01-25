import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { NEW_REGISTER, POST_REGISTER } from '../../redux/reducers/register';

function Register() {
  const userData = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();

  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange({ target: { value, name } }) {
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }

  function newRegister() {
    dispatch({ type: NEW_REGISTER, state: { name: fullName, email, password } });
  }

  async function postRegister() {
    dispatch({ type: POST_REGISTER });
    const result =  () => axios.post('http://localhost:3001/register', {
      userData,
    });

    console.log(result().data);
    // {type: API_SUCESS}
    // {type: API_ERROR}
  }

  function handleSubmit(e) {
    e.preventDefault();
    newRegister();
    postRegister();
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          testId="common_register__input-name"
          placeholder="Seu nome"
          value={ fullName }
          name="name"
          onChange={ handleChange }
        />
        <input
          type="email"
          testId="common_register__input-email"
          placeholder="email@tryber.com.br"
          value={ email }
          name="email"
          onChange={ handleChange }
        />
        <input
          type="password"
          testId="common_register__input-password"
          placeholder="********"
          value={ password }
          name="password"
          onChange={ handleChange }
        />
        <button type="submit" data-testid="common_register__button-register">
          REGISTER
        </button>
        <span data-testid="common_register__element-invalid_register ">
          Dados invalidios
        </span>
      </form>
    </div>
  );
}

export default Register;
