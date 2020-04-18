import React from "react";

const Login = props => (
  <div className="infoForm">
    {props.loginReg && 
      <div>
        {/* <h2>Поздравляем! Вы успешно зарегистрированы!</h2>
          <h3>Запомните, 
            ваш логин: <i>{props.loginReg}</i>, а пароль: <i>{props.passwordReg}</i>
          </h3> */}
      </div>
    }

    {props.login && 
      <div>
        {/* <h2>Вы успешно вошли!</h2>
          <h3>Итак, 
            ваш логин: <i>{props.login}</i>, а пароль: <i>{props.password}</i>
          </h3> */}
      </div>
    }

    <p className="error">{props.error}</p>
  </div>
);

export default Login;
