import "./index.scss";
import React,{Component} from "react"
import {connect} from "react-redux";
import Head from "~/components/head"

@connect()
class Sport extends Component{
    render(){
        return(
            <div>
                <Head history={this.props.history}/>
                <h2>这是体育的测试</h2>
            </div>
        )
    }
}
export default Sport;