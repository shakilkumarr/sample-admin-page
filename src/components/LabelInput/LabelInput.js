import React from "react";
import style from "./LabelInput.css"
import {PropTypes} from "prop-types"

class LabelInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      labelClass : "",
      inputVal : ""
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleFocus(labelClass){
    labelClass = labelClass ? style[labelClass] : "";
    !this.state.inputVal.length && this.setState((state)=>{
      let result = Object.assign({},state);
      result.labelClass = labelClass;
      return result;
    })
  }
  handleInputChange(key,val){
    let textVal = val.trim();
    this.props.getInputsOnChange(key,val);
    this.setState((state)=>{
      let result = Object.assign({},state);
      result.inputVal = textVal || "";
      textVal.length && (result.labelClass = style.labelActive)
      return result;
    })
  }
  render(){
    let objVal = this.props.objVal;
    let labelClass = style.loginLabel +" "+ this.state.labelClass;
    return (
      <div className={style.container}>
        <label className={labelClass}>{objVal.label}</label>
        <input
          className={style.loginInput}
          value={this.state.inputVal}
          type={objVal.type}
          onChange={(ev)=>{this.handleInputChange(objVal.type,ev.target.value)}}
          onBlur={()=>{this.handleFocus()}}
          onFocus={()=>{this.handleFocus("labelActive")}}
        />
        <pre className={style.loginMsg}>{objVal.message}</pre>
      </div>
    )
  }
}

LabelInput.propTypes = {
  objVal : PropTypes.object.isRequired,
  getInputsOnChange : PropTypes.func.isRequired
};

export default LabelInput;
