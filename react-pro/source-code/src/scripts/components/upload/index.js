import "./index.scss"
import React, { Component } from "react"
import { connect } from "react-redux"
import { changeHead, getHead, changeFlag } from "~/actions"
import { axios, baseURL, showToast,getTele } from "&"

@connect(
    state => ({
        pic: state.getIn(["data", "pic"]),
        flag: state.getIn(["data", "flag"])
    })
)
class Upload extends Component {
    handleChange = () => {
        const file = this.headImg.files[0];
        // console.log(file)
        var data = new FormData();
        data.append("avatar", file);
        this.props.dispatch(changeHead(data))
    }
    componentWillMount() {
        this.props.dispatch(changeFlag(this.props.history));
        let userInfo = localStorage.userInfo;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if (userInfo.mobile === sessionStorage.tele) {
                // console.log(userInfo.url)
                this.props.dispatch(getHead(userInfo.url));
            } else {
                this.getInitPic();
            }
        } else {
            this.getInitPic();
        }
    }
    getInitPic = () => {
        axios.post("/react/getlastPic")
            .then(res => {
                // console.log(res.data.result.pic)
                if (!!res.data.type) {
                    this.props.dispatch(getHead(res.data.result.pic.replace(/public/, baseURL)))
                } else {
                    this.props.dispatch(getHead(this.props.pic))
                }
            })
    }
    render() {
        const {
            pic,
            flag
        } = this.props
        let tele = ""
        if (sessionStorage.tele) {
            tele = sessionStorage.tele.toString();
            tele = tele.split("")
            tele.splice(3, 4, "****").join("")
        } else {
            tele = "请先登录"
        }
        return (
            <div className="sec1">
                <div className="head" onClick={() => this.headImg.click()}>
                    <img src={pic} alt="" />
                </div>
                <div className="name">
                    <p>{tele}</p>
                    {sessionStorage.tele && <span>开通vip,享受极致观看体验</span>}
                </div>
                <input type="file" disabled={flag?"":"disabled"} ref={el => this.headImg = el} onChange={this.handleChange} style={{ display: 'none' }} />
            </div>
        )
    }
}
export default Upload;