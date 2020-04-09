import React from "react";

const Form = props => (
  <form onSubmit={props.loginMethod}>
    <input type="text" name="login" placeholder="Введите ваш логин" />
    <input type="password" name="password" placeholder="Введите ваш пароль" />
      <button>Отправить данные</button>
  </form>
)

export default Form;