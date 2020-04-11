import React from "react";

const Form = props => (
  <form onSubmit={props.loginMethod} id="messForm">
    <input type="text" name="login" id="login" placeholder="Введите ваш логин" />
    <input type="password" name="password" placeholder="Введите ваш пароль" />
      <button>Отправить данные</button>
  </form>
)

export default Form;