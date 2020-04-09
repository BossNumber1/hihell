import React from "react";

const Login = props => (
  <div className="infoForm">
    {props.login &&
      <div>
        <p>Ваш логин: {props.login}</p>
        <p>Ваш пароль: {props.password}</p>
      </div>
    }

    <p className="error">{props.error}</p>
  </div>
);

export default Login;
