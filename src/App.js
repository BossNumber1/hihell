import React from "react"; 
import Info from "./components2/info2.js";
import Form from "./components2/form2.js";
import Login from "./components2/login2.js";

class App extends React.Component {

  state = {
    login: undefined,
    password: undefined,
    error: undefined
  }

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
        error: undefined
      });
    } else {
      this.setState({
        login: undefined,
        password: undefined,
        error: "Заполните то, что пропустили"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
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