import React from "react";
import LoginPage from "../LoginPage/LoginPage"
import DashBoard from "../DashBoard/DashBoard"
import style from "./FrontPage.css"

class FrontPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : Boolean(sessionStorage.getItem('isLoggedIn'))
    }
  }
  render(){
    let isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <div className={style.mainPage}>
          {
            isLoggedIn ? <DashBoard isLoggedIn={isLoggedIn} /> : <LoginPage isLoggedIn={isLoggedIn}/>
          }
        </div>
      </div>
    )
  }
}

export default FrontPage;
