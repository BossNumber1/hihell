import io from "socket.io-client";
import React from "react";
// import './App.css';
import "./Main.css";
import "./styleForm.css";
import "./stylesForMenu.css";
// import Info from "./components/info.js";
// import Menu from "./components/menu.js";
import Form from "./components/form.js";
import MenuDev from "./components/menuDev.js";
import Login from "./components/login.js";
import HH from "./components/hh.js";

class App extends React.Component {
  state = {
    login: undefined,
    password: undefined,
    loginReg: undefined,
    passwordReg: undefined,
    error: undefined,
    errorReg: undefined,
    pusk: undefined,
    text: undefined,
    ID: undefined
  };

  gettingForm = async (e) => {
    e.preventDefault();

    // let passHran = "";

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

              let passHran = localStorage.getItem(login); //получаем ID по логину

              this.setState({
                ID: passHran
              });

              console.log("lol2", passHran)

              socket.emit("send mess", { login: login, mess: password, ID: this.state.ID });

              socket.on('add mess', function(data) {
                let all_messages = document.getElementById("all_messages");
                all_messages.append(data.mess);
                all_messages.innerHTML = all_messages.innerHTML.replace(/<a.*?undefined<\/a>,?/,'');
              
                // console.log(data.missiya); //ответ от сервера по поводу проходки
                if (data.missiya == "open") {
                  let telo = document.getElementById("telo");
                  telo.innerHTML = "";

                  this.setState(
                    {   
                      text: <MenuDev /> //выводим меню
                    }
                  );
                }
              }.bind(this)); 
              // });
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

        let passHran = localStorage.getItem(loginReg); 
        // получаем ID по логину

        this.setState({
          ID: passHran
        });

        socket.emit("send mess", { loginReg: loginReg, messReg: passwordReg, ID: this.state.ID });
        
        socket.on('add mess', function(data) {
          let all_messages = document.getElementById("all_messages");
          all_messages.append(data.messRegi);

          // console.log("hi", data);

          let pusk = data.messi;

          this.setState(
            {
              pusk: pusk
            }
          );

         // ветвление

          if (this.state.pusk !== undefined) {
            //запускаем юзера в систему === шаг 1
                     

            // try {
              localStorage.setItem(loginReg, this.state.pusk); //теперь юзер может не заполнять форму 
              // } catch (e) {
              //     if (e.number == 22) { // QUOTA_EXCEEDED_ERR
              //         alert('Локальное хранилище переполнено');
              //     }
              // }
              
            //убираем формы

            let telo = document.getElementById("telo");
            telo.innerHTML = "";

            this.setState(
              {   
                text: <MenuDev /> //выводим меню
              }
            );

            // 3 шаг - в другой метод, когда юзер входит в сеть

            let passHran = localStorage.getItem(loginReg); 
            //получаем ID по логину

            this.setState({
              ID: passHran
            });

            //теперь надо сравнить пароли, если совпадают пропускать и 

            // socket.emit("send mess", { ID: this.state.ID });

            console.log("uh4!", passHran);
            console.log("uh9!", this.state.ID);


//---------------------------------------------------------------------------------------------------




          } else {
            this.setState(
                {
                    text: "юзер ещё не зареган или не вошёл"
                }
            );
          }
         
          all_messages.innerHTML = all_messages.innerHTML.replace(/<a.*?undefined<\/a>,?/,'');
          
        }.bind(this));

        // console.log("uh2!", passHran);
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
                <div id="all_messages"></div>
                  <div id="telo">
                    <Form loginMethod={this.gettingForm} />
                  </div>
                  <div>
                    {this.state.text}
                  </div>
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
    );
  }
}

export default App;
