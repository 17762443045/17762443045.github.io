import "./index.scss";
import React, { Component } from "react"
import { NavBar, Icon } from "antd-mobile"
import { connect } from "react-redux"
import { changeFlag, getHead } from "~/actions"
import {axios,baseURL} from "&"


@connect(
    state => ({
        flag: state.getIn(["data", "flag"]),
        pic: state.getIn(["data", "pic"])
    })
)
class Head extends Component {

    loopMine = () => {
        this.props.history.push("/main/mine")
    }
    loopLogin = () => {
        this.props.history.push("/login")
    }
    // componentDidMount(){
    //     console.log("000000")
    //     // let userInfo = localStorage.userInfo;
    //     // userInfo = JSON.parse(userInfo);
    //     // console.log(userInfo.mobile)
    //     // console.log(sessionStorage.tele)
    //     this.props.dispatch(changeFlag(this.props.history));
    //      let userInfo = localStorage.userInfo;
    //     if (userInfo) {
    //         userInfo = JSON.parse(userInfo);
    //         if (userInfo.mobile == sessionStorage.tele) {
    //             this.props.dispatch(getHead(userInfo.url));
    //         } else {
    //             this.props.dispatch(getHead());
    //         }
    //     } else {
    //         this.props.dispatch(getHead());
    //     }
    // }
    componentWillMount() {
        this.props.dispatch(changeFlag(this.props.history));
        let userInfo = localStorage.userInfo;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if (userInfo.mobile === sessionStorage.tele) {
                // console.log(userInfo.mobile)
                this.props.dispatch(getHead(userInfo.url));
            } else {
                this.getInitPic();
            }
        } else {
            this.getInitPic();
        }
    }
    getInitPic = ()=>{
            axios.post("/react/getlastPic")
                .then(res=>{
                    if(!!res.data.type){
                        this.props.dispatch(getHead(res.data.result.pic.replace(/public/,baseURL)))
                    }else{
                        this.props.dispatch(getHead(this.props.pic))
                    }
                })
    }
    render() {
        const {
            flag,
            title,
            text,
            pic
        } = this.props
        console.log(flag)
        return (
            <div className="head">
                <NavBar
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    icon={<img style={{ width: '1.2rem' }} src={"http://img.cmvideo.cn:8080/publish/pictures/comment/app-management-server/2020/1/1/1312208.png"} alt="" />}
                    rightContent={[
                        flag && <img className="right" key={0} onClick={this.loopMine} style={{ width: '1.2rem' }} src={pic} alt="" />,
                        !flag && <img className="right" key={1} onClick={this.loopLogin} style={{ width: '1.2rem' }} src={"data:image/png;base64,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"} alt="" />
                    ]}
                >
                    {!title && <p className="input" onClick={() => this.props.history.push("/search")}>
                        <Icon type="search" />
                        <span>四季中国</span>
                    </p>}
                    {title && <span>{text}</span>}
                </NavBar>
            </div>
        )
    }

}
export default Head;
