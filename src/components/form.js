// const Form = (props) => (

  // <form onSubmit={props.loginMethod} id="messForm">
  //   <input type="text" name="login" id="login" placeholder="Введите ваш логин" />
  //   <input type="password" name="password" placeholder="Введите ваш пароль" />
  //     <button>Отправить данные</button>
  // </form>

import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this)
       this.state = {
           count: 0,
           count2: 0,
       }

    this.output2 = this.output2.bind(this)
  }

  output(evt) {
    this.setState({count: this.state.count + evt})
    let proverka1 = this.state.count;

    if (proverka1 > 0) {
      let mai = document.getElementById("main2"); 
      let up = document.getElementById("signUpForm");
      let style = mai.style; 
      let upStyle = up.style;

      style.animationName = "showSignUp";
      style.transform = "translate(-50%,-50%) rotateY(180deg)";

      upStyle.animationName = "hideSignIn";
      upStyle.transform = "translate(-50%,-50%) rotateY(0deg)";
    }
}

output2(evt2) {
  this.setState({count2: this.state.count2 + evt2})
  let proverka2 = this.state.count2;

  if (proverka2 > 0) {
    let mai = document.getElementById("main2"); 
    let up = document.getElementById("signUpForm");
    let style = mai.style; 
    let upStyle = up.style;

    style.animationName = "hideSignUp";
    style.transform = "translate(-50%,-50%) rotateY(0deg)";
    upStyle.animationName = "showSignIn";
    upStyle.transform = "translate(-50%,-50%) rotateY(180deg)";
  }
}

  render() {
    return (
      <div>
        <form id="messForm">
           
          {/* <form onSubmit={props.loginMethod} id="messForm"> */}
          
          <div id="main2">
          <table border="0">
            {/* <table border="0" cellspacing="10"> */}
            <tbody> 
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
                                
                    <a href="#" id="flipToSignUp" onClick={(evt) => this.output(Math.random())}>

                    {/* <h1>Count1: {this.state.count}</h1> */}
                    
                      Зарегистрируйтесь
                    </a>
                  </div>
                </td>
              </tr>
              </tbody> 
            </table>
          </div>
          <div id="signUpForm">
          <table border="0">
            {/* <table border="0" cellspacing="10"> */}
            <tbody> 
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
                  <input type="password" placeholder="Придумайте пароль" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="password" placeholder="Повторите пароль" />
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
                    <a href="#" id="flipToSignIn" onClick={(evt2) => this.output2(Math.random())}>
                    {/* <h1>Count2: {this.state.count2}</h1> */}
                      Войдите
                    </a>
                  </div>
                </td>
              </tr>
              </tbody> 
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;