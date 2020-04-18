import io from "socket.io-client";
import React from "react";
// import './App.css';
import "./Main.css";
import "./styleForm.css";
// import "./stylesForMenu.css";
// import Info from "./components/info.js";
// import Menu from "./components/menu.js";
import Form from "./components/form.js";
// import MenuDev from "./components/menuDev.js";
import Login from "./components/login.js";

class App extends React.Component {
  state = {
    login: undefined,
    password: undefined,
    loginReg: undefined,
    passwordReg: undefined,
    error: undefined,
    errorReg: undefined
  };

  gettingForm = async (e) => {
    e.preventDefault();
    let login = e.target.elements.login.value;
    let password = e.target.elements.password.value;

    let loginReg = e.target.elements.loginReg.value;
    let passwordReg = e.target.elements.passwordReg.value;
    let rePasswordReg = e.target.elements.rePasswordReg.value;
    
    let socket = io.connect("localhost:3000");

    //алгоритм для авторизации

    if (login) {
      const dataLog = await login;
      const dataPass = await password;

          //проверяем полученные данные

            let fail = false; 
                   
            if (dataLog === "" || dataLog === " ") {
              fail = "Вы не ввели логин";
            } else if (dataPass === "") {
              fail = "Вы не ввели пароль";
            }
        
            if (fail) {
              this.setState({
                error: fail
              });
            } else {
              this.setState({
                loginReg: undefined,
                passwordReg: undefined,
                login: dataLog,
                password: dataPass,
                error: undefined
              });
            }

            if (fail === false) {
              socket.emit("send mess", { login: login, mess: password });

              socket.on('add mess', function(data) {
                let all_messages = document.getElementById("all_messages");
                all_messages.append(data.mess);
                // all_messages.innerHTML.replace(/<a.*?undefined<\/a>,?/,'');
                all_messages.innerHTML = all_messages.innerHTML.replace(/<a.*?undefined<\/a>,?/,'');
              });
            }
      
          } else {
            this.setState({
              login: undefined,
              password: undefined,
              loginReg: undefined,
              passwordReg: undefined,
              error: "Введите данные"
            });
          }
    
    //алгоритм для регистрации

    if (loginReg) {
      const dataLogReg = await loginReg;
      const dataPassReg = await passwordReg;
      const dataRePassReg = await rePasswordReg;

      //проверяем полученные данные

        let fail = false; 
                   
        if (dataLogReg === "" || dataLogReg === " ") {
          fail = "Вы не ввели логин";
        } else if (dataPassReg === "") {
          fail = "Вы не ввели пароль";
        } else if (dataPassReg !== dataRePassReg) {
          fail = "Пароли не совпадают";
        }
    
        if (fail) {
          this.setState({
            error: fail
          });
        } else {
          this.setState({
            login: undefined,
            password: undefined,
            loginReg: dataLogReg,
            passwordReg: dataPassReg,
            error: undefined
          });
        }

      //теперь запускаем socket.io и отправляем данные на сервер

      // let socket = io.connect("localhost:3000");
      
      if (fail === false) {
        socket.emit("send mess", { loginReg: loginReg, messReg: passwordReg });

        socket.on('add mess', function(data) {
          let all_messages = document.getElementById("all_messages");
          all_messages.append(data.messRegi);
         
          all_messages.innerHTML = all_messages.innerHTML.replace(/<a.*?undefined<\/a>,?/,'');
          
          // all_messages.innerHTML.replace(/<a.*?undefined<\/a>,?/,'');

        });
      }

    } else {

      this.setState({
        loginReg: undefined,
        passwordReg: undefined,
        errorReg: "Введите данные"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              {/* <div> */}
              <div className="col-sm-5 info">
                  <div id="all_messages">

                  </div>
                {/* <Menu /> */}
                {/* <MenuDev /> */}
                </div>
              <div className="col-sm-12 form">
                <Form loginMethod={this.gettingForm} />
                <Login
                  login={this.state.login}
                  password={this.state.password}
                  loginReg={this.state.loginReg}
                  passwordReg={this.state.passwordReg}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
