import "./index.scss";
import React,{Component} from "react"
import {connect} from "react-redux";

@connect()
class Vip extends Component{
    render(){
        return(
            <div>
                <h2>这是会员的测试</h2>
            </div>
        )
    }
}
export default Vip;