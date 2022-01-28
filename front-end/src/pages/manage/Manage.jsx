import React, { useState } from 'react';
import axios from 'axios';
import { registerValidate } from '../../helpers/formValidations';
import getLocalStorage from '../../helpers/getLocalStorage';
import status from '../../helpers/status';
import HeaderAdmin from './HeaderAdmin';

const REGISTER_ADM_URL = 'http://localhost:3001/register/admin';

function Manage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [warning, setWarning] = useState('none');

  const handleChange = ({ target }) => {
    switch (target.name) {
    case 'name':
      return setName(target.value);
    case 'email':
      return setEmail(target.value);
    case 'password':
      return setPassword(target.value);
    case 'role':
      return setRole(target.value);
    default:
      return null;
    }
  };

  const registerButton = async (e) => {
    e.preventDefault();
    try {
      const { token } = getLocalStorage('user');
      await axios.post(
        REGISTER_ADM_URL,
        {
          name,
          email,
          password,
          role,
        },
        {
          headers: { authorization: token },
        },
      );
    } catch (err) {
      if (err.response.status === status.DUPLICATED) setWarning('block');
    }
  };

  return (
    <div>
      <HeaderAdmin />
      <form>
        <input
          name="name"
          type="text"
          data-testid="admin_manage__input-name"
          onChange={ handleChange }
          value={ name }
        />
        <input
          name="email"
          type="email"
          data-testid="admin_manage__input-email"
          onChange={ handleChange }
          value={ email }
        />
        <input
          name="password"
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ handleChange }
          value={ password }
        />
        <select
          name="role"
          defaultValue={ role }
          onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ registerButton }
          disabled={ !registerValidate(email, password, name) }
        >
          CADASTRAR
        </button>
      </form>
      <span
        data-testid="admin_manage__element-invalid-register"
        style={ { display: warning } }
      >
        Email já cadastrado.
      </span>
    </div>
  );
}

export default Manage;
