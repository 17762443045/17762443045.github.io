import "./index.scss";
import React,{Component} from "react"
import {connect} from "react-redux";

@connect()
class Square extends Component{
    render(){
        return(
            <div>
                <h2>这是广场的测试</h2>
            </div>
        )
    }
}
export default Square;