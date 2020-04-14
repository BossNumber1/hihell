import io from "socket.io-client";
import React from "react";
// import './App.css';
import "./Main.css";
// import Info from "./components/info.js";
// import Menu from "./components/menu.js";
import Form from "./components/form.js";
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
    console.log(login);
    console.log(password);

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

      socket.on("add mess", function (data) {
        console.log("проверка! передающиеся данные = ", data);
      });
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
              <div className="col-sm-5 info">{/* <Menu /> */}</div>
              <div className="col-sm-7 form">
                <Form loginMethod={this.gettingForm} />
                <Login
                  login={this.state.login}
                  password={this.state.password}
                  error={this.state.error}
                />
                {/* <ScriptLoad name={this.state.login} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
