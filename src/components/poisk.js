import React from "react";

class Poisk extends React.Component {
    constructor(props) {
        super(props);
           this.state = {
               arr: props.buk
           }
    }
    
    render() {
        return (

        <div>
            <form> 
                <input type="text" id="poisk" placeholder="Найти друзей" />
                    {/* <input type="button" id="butPoisk" value="Найти" /> */}

                <div id="butPoisk">
                    <a href="/#">
                        {/* Регистрация */}
                    </a>
                </div>
            </form>
            
            {/* { this.state.arr.map (function(currentValue) {
                    return  <div id="block">
                                <p id="bukvar" style={{marginTop: currentValue*20 + 'px'}}>{currentValue}</p>
                                <div id="infoUserPoisk">
                                    { this.state.arr.map (function(currentValue) {
                                        return <p id="bukvar" style={{marginTop: currentValue*20 + 'px'}}>{currentValue}</p>
                                    })}
                                    <p id="avaUsers"></p>
                                        <p id="infoUP">
                                            <p id="nameUser">Крис Асмус</p>
                                            <p id="numFri">22 друга</p>
                                        </p>
                                    <p id="online"></p>
                                        <div id="addUP">
                                            <p id="smsW"></p>
                                            <p id="noFriW"></p>
                                        </div>
                                </div>
                            </div>

                })} */}

            <div id="block">

                { this.state.arr.map (function(currentValue) {

                    for (let i = 1; i < 3; i++) {
                        // let ind = i; 
                        console.log(i);}
                        return <p id="bukvar" style={{marginTop: currentValue*20 + 'px'}}>{currentValue}</p>;
                   
                
                })}

                {/* <p id="bukvar">K</p> */}
            
                <div id="infoUserPoisk">
                    {/* { this.state.arr.map (function(currentValue) {
                        return <p id="bukvar" style={{marginTop: currentValue*20 + 'px'}}>{currentValue}</p>
                    })} */}
                    <p id="avaUsers"></p>
                        <p id="infoUP">
                            <p id="nameUser">Крис Асмус</p>
                            <p id="numFri">22 друга</p>
                        </p>
                    <p id="online"></p>
                        <div id="addUP">
                            <p id="smsW"></p>
                            <p id="noFriW"></p>
                        </div>
                </div>
            
                <div id="infoUserPoisk" style={{marginTop: 197 + 'px'}}>
                    {/* 50 */}    

                    <p id="avaUsers2"></p>
                        <p id="infoUP">
                            <p id="nameUser">Ксю Логинова</p>
                            <p id="numFri">1 друг</p>
                        </p>
                    {/* <p id="online"></p> */}
                        <div id="addUP">
                            <p id="smsW"></p>
                            <p id="friW"></p>
                        </div>
                </div>
            
            </div>
        </div>
        );
    }
}

export default Poisk;