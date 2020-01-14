import "./index.scss";
import React, { Component } from "react"
import { connect } from "react-redux";
import { changeTime } from "~/actions"

let timer = null;
@connect(
    state => ({
        time: state.getIn(["time", "disTime"])
    })
)
class Guide extends Component {
    render() {
        const {
            time,
            history
        } = this.props
        return (
            <div className="guide">
                <div className="skip" onClick={() => { clearInterval(timer); history.push("/main") }}>跳过广告 | <span>{time}</span></div>
            </div>
        )
    }
    componentDidMount() {
        timer = setInterval(() => {
            // console.log(this.props.time)
            if (this.props.time > 0) {
                this.props.dispatch(changeTime)
            } else {
                clearInterval(timer);
                this.props.history.push("/main")
            }
        }, 1000)
    }
}
export default Guide;