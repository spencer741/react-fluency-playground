import React, { Component } from 'react';

//import './App.css';
//import './bootstrap.min.css';
import './LoginPage.css';



class LoginComponent extends Component {
  render() {
    //Js gets placed under the render.
    return (
     
        <div className="loginContainer">
          <div className="login-form">
              <form>
                  <input id="username" type="text" placeholder="username" />
                  <input id="password" type="password" placeholder="password" />
                  <button id ="login-btn" type="button">login</button>
                  <label>{this.props.message}</label>
              </form>
          </div>
        </div>
    );
  }
}


export default LoginComponent;


