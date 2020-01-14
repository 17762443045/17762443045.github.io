import "./index.scss";
import React, { Component } from "react"
import { connect } from "react-redux"
import { NavBar, Icon, Button, WingBlank, WhiteSpace } from "antd-mobile"
import { changeMobile, getCode, changeFlag } from "~/actions"
import { showToast, axios } from "&"

const mReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
const cReg = /^\d{4}$/
@connect(
    state => ({
        mobile: state.getIn(["data", "mobile"]),
        code: state.getIn(["data", "code"])
    })
)

class Login extends Component {
    handleClear = () => {
        this.props.dispatch(changeMobile(""))
    }
    handleCheck = () => {
        let tele = this.tele.value;
        let code = this.code.value;
        if (this.tele.value) {
            if (mReg.test(this.tele.value)) {
                if (this.code.value) {
                    if (cReg.test(this.code.value)) {
                        // console.log(this.props.code)
                        axios.post("/react/checkCode", { tele, code }).then(result => {
                            if (result.data.token) {
                                sessionStorage.tele = this.tele.value;
                                sessionStorage.token = result.data.token;
                                this.props.dispatch(changeFlag(this.props.history));
                                // setTimeout(() => {
                                    this.props.history.push("/main/home")
                                // }, 1000)
                            }
                        })

                    } else {
                        showToast("短信验证码格式不对")
                    }
                } else {
                    showToast("短信验证码不能为空")
                }
            } else {
                showToast("手机号码格式不对")
            }
        } else {
            showToast("手机号码不能为空")
        }
    }
    sendMsg = () => {
        if (this.tele.value) {
            // console.log(this.tele.value)
            // console.log(mReg.test(this.tele.value))
            if (mReg.test(this.tele.value)) {
                this.props.dispatch(getCode(this.tele.value))
            } else {
                showToast("手机号码格式不对")
            }
        } else {
            showToast("手机号码不能为空")
        }
    }
    render() {
        const {
            history,
            dispatch,
            mobile,
        } = this.props
        return (
            <div className="body">
                <NavBar
                    mode="light"
                    style={{ borderBottom: '1px solid #EEF1F3' }}
                    icon={<Icon style={{ transform: 'scale(1.5)' }} type="left" />}
                    onLeftClick={() => history.go(-1)}
                >短信登录</NavBar>
                <div className="logo">
                    <img src="https://passport.migu.cn/mobile/images/migu-video.png" alt="" />
                </div>
                <WingBlank>
                    <div className="login">
                        <div className="tele" ref="one">
                            <input ref={el => this.tele = el} type="text" placeholder="手机号" value={mobile} onChange={() => dispatch(changeMobile(this.tele.value))} />
                            <div className="clear" style={{ display: mobile ? 'block' : 'none' }} onClick={this.handleClear}>x</div>
                        </div>
                        <div className="code" ref="two">
                            <input ref={el => this.code = el} type="text" placeholder="短信验证码" />
                            <Button className="get" onClick={this.sendMsg} inline style={{ border: "#8A909B 1px solid", borderRadius: '999px' }} size="small">获取验证码</Button>
                        </div>
                        <WhiteSpace size="xl" />
                        <div className="btn">
                            <Button type="primary" style={{ borderRadius: '999px' }} onClick={this.handleCheck}>登录</Button>
                        </div>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
export default Login
