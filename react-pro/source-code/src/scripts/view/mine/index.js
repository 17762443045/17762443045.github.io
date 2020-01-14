import "./index.scss";
import React, { Component } from "react"
import { connect } from "react-redux";
import { WhiteSpace, Button } from "antd-mobile"
import Head from "~/components/head";
import { changeFlag, getHead, resetHead } from "~/actions"
import Upload from "~/components/upload";
import { observer } from "mobx-react";
import content from "~/mobx/content";
import { axios, baseURL } from "&"



@connect(
    state => ({
        pic: state.getIn(["data", "pic"])
    })
)
@observer
class Mine extends Component {
    handleQuit = () => {
        sessionStorage.clear();
        this.props.dispatch(changeFlag());
        this.props.dispatch(resetHead());
        // setTimeout(() => {
        this.props.history.push("/main/home")
        // }, 2000)
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
        console.log(this.props.pic)
        axios.post("/react/getlastPic")
            .then(res => {
                if (!!res.data.type) {
                    this.props.dispatch(getHead(res.data.result.pic.replace(/public/, baseURL)))
                } else {
                    this.props.dispatch(getHead(this.props.pic))
                }
            })
    }
    render() {
        return (
            <div>
                <Head title={true} text="个人中心" />
                <WhiteSpace size="xs" />
                <Upload />
                <WhiteSpace />
                <div className="sec2">
                    <span>会员中心</span>
                </div>
                <WhiteSpace />
                <div>
                    <div className="sec2 sec3">
                        <span>历史纪录</span>
                    </div>
                </div>
                <WhiteSpace />
                <div className="sec2 sec4">
                    <span>我的收藏</span>
                </div>
                <WhiteSpace />
                <div className="sec2 sec5">
                    <span>帮助和反馈中心</span>
                </div>
                <WhiteSpace size="xl" />
                {sessionStorage.tele && <Button type="primary" onClick={() => this.handleQuit()}>退出登录</Button>}
                {!sessionStorage.tele && <Button type="primary" onClick={() => { this.props.history.push("/login") }}>登录</Button>}
            </div>
        )
    }
}
export default Mine;

