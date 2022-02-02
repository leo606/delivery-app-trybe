import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getLocalStorage from '../../helpers/getLocalStorage';

import HeaderAdmin from './HeaderAdmin';
import NewUserForm from './NewUserForm';

const DELETE_URL = 'http://localhost:3001/register';
const GET_USERS_URL = 'http://localhost:3001/users/all';

function Manage() {
  const [users, setUsers] = useState([]);

  function deleteUser(id) {
    try {
      const headers = { authorization: getLocalStorage('user').token };
      axios.delete(DELETE_URL, { id }, { headers });
      setUsers(users.filter((user) => user.id !== id));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const headers = { authorization: getLocalStorage('user').token };
        const res = await axios.get(GET_USERS_URL, { headers });
        setUsers(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, []);
  return (
    <>
      <HeaderAdmin />
      <NewUserForm />
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Nome</td>
            <td>Email</td>
            <td>Tipo</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, role }, i) => (
            <tr key={ id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${i + 1}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${i + 1}` }
              >
                {name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${i + 1}` }
              >
                {email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${i + 1}` }
              >
                {role}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-remove-${i + 1}` }
              >
                {' '}
                <button type="button" onClick={ () => deleteUser(id) }>Excluir</button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Manage;
