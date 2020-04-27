import React from "react";

class Set extends React.Component {
    constructor(props) {
        super(props);
        this.output = this.output.bind(this);
        this.output2 = this.output2.bind(this);

        this.state = {
            count: 0,
            count2: 0
        };
    }
      
    output(evt) {
          this.setState({count: this.state.count + evt})
          let proverka1 = this.state.count;
      
          if (proverka1 > 0) {
            let teloSet = document.getElementById("teloSet"); 
            let teloSetDost = document.getElementById("teloSetDost");
            let teloSetStyle = teloSet.style; 
            let teloSetDostStyle = teloSetDost.style;
      
            teloSetStyle.animationName = "showSignUp";
            teloSetStyle.transform = "translate(-50%,-50%) rotateY(180deg)";

            teloSetDostStyle.animationName = "hideSignIn";
            teloSetDostStyle.transform = "translate(-50%,-50%) rotateY(0deg)";

            let formo1 = document.getElementById("formSet");
            formo1.reset();
          }
    }

    output2(evt2) {
        this.setState({count2: this.state.count2 + evt2})
        let proverka2 = this.state.count2;
    
        if (proverka2 > 0) {
          let teloSet2 = document.getElementById("teloSet"); 
          let teloSetDost2 = document.getElementById("teloSetDost");
          let teloSetStyle2 = teloSet2.style; 
          let teloSetDostStyle2 = teloSetDost2.style;
    
          teloSetStyle2.animationName = "hideSignUp";
          teloSetStyle2.transform = "translate(-50%,-50%) rotateY(0deg)";
    
          teloSetDostStyle2.animationName = "showSignIn";
          teloSetDostStyle2.transform = "translate(-50%,-50%) rotateY(180deg)";

          let formo2 = document.getElementById("formSet");
          formo2.reset();
        }
    }

    render() {
        return (
            <div>
                <form id="formSet">
                    <div id="teloSet">
                        <label>Настройки профиля</label>
                            <input type="text" id="name" name="name" placeholder="Введите имя или имя и фамилию" />
                            <input type="text" id="email" name="email" placeholder="Введите почту для подтверждения аккаунта" />
                            
                            <button id="butSet">Сохранить</button>

                        <div id="devIdSetDost">
                            <a href="/#" id="idSetDost" onClick={(evt) => this.output(1)}>
                                Настройки доступа
                            </a>
                        </div>
                    </div>

                    <div id="teloSetDost">
                        <label>Настройки доступа</label>
                            <input type="text" id="logSet" name="logSet" placeholder="Сменить логин" />
                            <input type="password" id="passSet" name="passSet" placeholder="Сменить пароль" />
                            
                            <button id="butSetDost">Сохранить</button>

                        <div id="divIdTeloSet">
                            <a href="/#" id="idTeloSet" onClick={(evt2) => this.output2(2)}>
                                Настройки профиля
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Set;