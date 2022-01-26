import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import status from '../../helpers/status';
import md5Serialize from '../../helpers/md5Serialize';
import { loginValidate } from '../../helpers/formValidations';
// import { requestAuth } from '../../redux/actions/login/getAuth';
// import { getUser } from '../../redux/actions/user/getUser';
import './login.css';

const LOGIN_URL = 'http://localhost:3001/login';

function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { token, role, err } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('none');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const loginButton = async (e) => {
    try {
      e.preventDefault();
      // dispatch(requestAuth({ email, password }));
      // dispatch(getUser({ email }));
      const passwordMd5 = md5Serialize(password);
      const res = await axios.post(LOGIN_URL, {
        email,
        password: passwordMd5,
      });
      if (res.status === status.OK) {
        localStorage.setItem('user', JSON.stringify(res));
        if (res.role === 'customer') navigate('/customer/products');
        if (res.role === 'administrator') navigate('/admin/manage');
        if (res.role === 'seller') navigate('/seller/orders');
      }
    } catch (err) {
      const { response } = err;
      if (response.status === status.NOT_FOUND) setWarning('block');
    }
  };

  const registerButton = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  // useEffect(() => {
  //   if (token && role === 'customer') {
  //     navigate('/customer/products');
  //   }
  //   if (token && role === 'administrator') {
  //     navigate('/admin/manage');
  //   }
  //   if (token && role === 'seller') {
  //     navigate('/seller/orders');
  //   }
  //   if (err) setWarning('block');
  // }, [token, role, err, navigate]);

  return (
    <div className="loginComponent">
      <form id="loginForm" className="loginForm">
        <div id="inputs" className="inputs">
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

        <div id="buttons" className="buttons">
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
        className="warning"
        data-testid="common_login__element-invalid-email"
        style={ { display: warning } }
      >
        Aviso: email ou senha incorretos
      </p>
    </div>
  );
}

export default Login;
