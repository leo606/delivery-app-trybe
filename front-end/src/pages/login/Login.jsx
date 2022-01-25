import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginValidate } from '../../helpers/formValidations';
import { requestToken } from '../../redux/actions/login/getToken';
import { getUser } from '../../redux/actions/user/getUser';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, role, err } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('none');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const loginButton = (e) => {
    e.preventDefault();
    dispatch(requestToken({ email, password }));
    dispatch(getUser({ email }));
  };

  const registerButton = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  useEffect(() => {
    if (token && role === 'customer') {
      navigate('/customer/products');
    }
    if (token && role === 'administrator') {
      navigate('/admin/manage');
    }
    if (token && role === 'seller') {
      navigate('/seller/orders');
    }
    if (err) setWarning('block');
  }, [token, role, err, navigate]);

  return (
    <div id="loginComponent">
      <form id="loginForm">
        <div id="inputs">
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
        <div id="buttons">
          <button
            type="submit"
            data-testid="common_login__button-login"
            onClick={ loginButton }
            disabled={ !loginValidate(email, password) }
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ registerButton }
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
      <p
        id="warning"
        data-testid="common_login__element-invalid-email"
        style={ { display: warning } }
      >
        Aviso: email ou senha incorretos
      </p>
    </div>
  );
}

export default Login;
