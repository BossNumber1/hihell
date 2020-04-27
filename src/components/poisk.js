import React from "react";
// import { findAllInRenderedTree } from "react-dom/test-utils";

const Poisk = () => (
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

        <p id="bukvar">K</p>

        <div id="infoUserPoisk">
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
    
        <div id="infoUserPoisk2">
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
)

export default Poisk;