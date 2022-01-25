import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { NEW_REGISTER, POST_REGISTER } from '../../redux/reducers/register';
import Input from '../../components/input';

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
    const result = async () => axios.post('http://localhost:3001/register', {
      userData,
    });

    console.log(result());
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
        <Input
          type="text"
          testId="common_register__input-name"
          placeholder="Seu nome"
          value={ fullName }
          name="name"
          onChange={ handleChange }
        />
        <Input
          type="email"
          testId="common_register__input-email"
          placeholder="email@tryber.com.br"
          value={ email }
          name="email"
          onChange={ handleChange }
        />
        <Input
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
        <button type="button" onClick={ () => console.log(userData) }>redux</button>
      </form>
    </div>
  );
}

export default Register;
