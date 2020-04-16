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
    error: undefined,
  };

  gettingForm = async (e) => {
    e.preventDefault();
    let login = e.target.elements.login.value;
    let password = e.target.elements.password.value;
    
    if (login) {
      const dataLog = await login;
      const dataPass = await password;

      this.setState({
        login: dataLog,
        password: dataPass,
        error: undefined,
      });

      //теперь запускаем socket.io и отправляем данные на сервер

      let socket = io.connect("localhost:3000");

      socket.emit("send mess", { login: login, mess: password });

    } else {
      this.setState({
        login: undefined,
        password: undefined,
        error: "Заполните то, что пропустили",
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
                {/* <Menu /> */}
                {/* <MenuDev /> */}
                </div>
              <div className="col-sm-12 form">
                <Form loginMethod={this.gettingForm} />
                <Login
                  login={this.state.login}
                  password={this.state.password}
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
