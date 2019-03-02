import React from "react";
import {loginPageData} from "../../api/mockData"
import LabelInput from "../LabelInput/LabelInput"
import style from "./LoginPage.css"

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.localProps = {
      text : sessionStorage.getItem('userName') || "",
      password : sessionStorage.getItem('password') || ""
    }
    this.getInputsOnChange = this.getInputsOnChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  getInputsOnChange(key,value){
    this.localProps[key] = value;
  }
  doLogin(){
    let text = this.localProps.text;
    let password = this.localProps.password;
    console.log(text,password)
  }
  handleKeyDown(ev){
    if(ev.keyCode === 13){
      this.doLogin()
    }
  }
  componentDidMount(){
    document.addEventListener("keydown",this.handleKeyDown);
  }
  componentWillUnMount(){
    document.removeEventListener("keydown",this.handleKeyDown);
  }
  render(){
    return (
      <div className={style.container}>
        <div className={style.header}>
          Log In
        </div>
        <div className={style.body}>
          {
            loginPageData.map((eachVal,index)=>{
              return <LabelInput objVal={eachVal} getInputsOnChange={this.getInputsOnChange} key={eachVal.type + "_" +index}/>
            })
          }
        </div>
        <div className={style.footer}>
          <button type="Submit" className={style.submit} onClick={this.doLogin}>Submit</button>
        </div>
      </div>
    )
  }
}

export default LoginPage;
