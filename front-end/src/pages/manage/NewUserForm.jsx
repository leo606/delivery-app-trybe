import React, { useState } from 'react';
import axios from 'axios';
import { registerValidate } from '../../helpers/formValidations';
import md5Serialize from '../../helpers/md5Serialize';
import getLocalStorage from '../../helpers/getLocalStorage';
import status from '../../helpers/status';

const REGISTER_ADM_URL = 'http://localhost:3001/register/admin';

function NewUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });
  const [warning, setWarning] = useState('none');

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const postUser = async (e) => {
    e.preventDefault();
    try {
      const headers = { authorization: getLocalStorage('user').token };
      await axios.post(
        REGISTER_ADM_URL,
        { ...formData, password: md5Serialize(formData.password) },
        { headers },
      );
    } catch (err) {
      if (err.response.status === status.DUPLICATED) setWarning('block');
    }
  };

  return (
    <>
      <form onSubmit={ postUser }>
        <input
          name="name"
          type="text"
          data-testid="admin_manage__input-name"
          onChange={ handleChange }
          value={ formData.name }
          autoComplete="new-password"
          placeholder="Digite o nome"
        />
        <input
          name="email"
          type="email"
          data-testid="admin_manage__input-email"
          onChange={ handleChange }
          value={ formData.email }
          autoComplete="new-password"
          placeholder="Digite o email"
        />
        <input
          name="password"
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ handleChange }
          value={ formData.password }
          autoComplete="new-password"
          placeholder="Digite a senha"
        />
        <select
          name="role"
          defaultValue={ formData.role }
          onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !registerValidate(formData.email, formData.password, formData.name) }
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
    </>
  );
}

export default NewUserForm;
