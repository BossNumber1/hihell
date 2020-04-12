import React from "react";

const Form = (props) => (
  // <form onSubmit={props.loginMethod} id="messForm">
  //   <input type="text" name="login" id="login" placeholder="Введите ваш логин" />
  //   <input type="password" name="password" placeholder="Введите ваш пароль" />
  //     <button>Отправить данные</button>
  // </form>
  <form onSubmit={props.loginMethod} id="messForm">
    <div id="main2">
      <table border="0" cellspacing="10">
        <tr>
          <td>
            <div id="title">Вход</div>
            <hr size="1px" width="100px" color="white" />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Введите свой логин"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="password"
              name="password"
              placeholder="Введите свой пароль"
            />
          </td>
        </tr>
        <tr>
          <td align="right">
            <div id="frt">Забыли пароль?</div>
          </td>
        </tr>
        <tr>
          <td align="center">
            <button>Отправить данные</button>
            {/* <input type="button" value="Войти" id="signInBtn" /> */}
          </td>
        </tr>
        <tr>
          <td align="center">
            <div id="signUpMsg">
              Нет аккаунта?{" "}
              <a href="#" id="flipToSignUp">
                Зарегистрируйтесь
              </a>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div id="signUpForm">
      <table border="0" cellspacing="10">
        <tr>
          <td>
            <div id="title">Регистрация</div>
            <hr size="1px" width="100px" color="white" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="Придумайте логин" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="email" placeholder="Введите свой email" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="password" placeholder="Придумайте пароль" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <input type="submit" value="Начать!" id="signUpBtn" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <div id="signInMsg">
              Есть аккаунт?{" "}
              <a href="#" id="flipToSignIn">
                Войдите
              </a>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </form>
);

export default Form;
