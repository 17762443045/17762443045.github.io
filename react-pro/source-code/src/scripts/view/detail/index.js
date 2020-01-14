import "./index.scss";
import React, { Component } from "react"
import { connect } from "react-redux";
import { observer } from "mobx-react";
import detail from "~/mobx/detail"
import { WingBlank, Button, WhiteSpace } from "antd-mobile";
import { baseURL, getTele } from "&"
@connect()
@observer
class Detail extends Component {
    componentDidMount() {
        let id = new URLSearchParams(this.props.location.search).get("pid")
        detail.getInfo(id)
        detail.commentList(id)
    }
    send = (search) => {
        console.log(search)
        let pid = new URLSearchParams(search).get("pid");
        let comments = this.comments.value
        detail.getComment({ comments, pid });
    }
    render() {
        const {
            info
        } = detail
        let arr = [];
        if (info.updateEP) {
            for (let i = 0; i < parseInt(info.updateEP.slice(3)); i++) {
                arr.push(<li key={i}>{i + 1}</li>)
            }
        }
        return (
            <div className="detail">
                <div className="pic">
                    <div className="back" onClick={() => this.props.history.go(-1)}> {"< 返回"} </div>
                    {info.pics && <img src={detail.info.pics.lowResolutionH} alt="" />}
                </div>
                <WingBlank size="md" className="content">
                    <Button icon={<img src="http://m.miguvideo.com/mgs/msite/prd/v_20191231184517_1ef395e6/dist/assets/MiGuVideoIcon.png" alt="" />} type="primary" size="small">打开咪咕视频,体验5G超高清!</Button>
                    <h2 className="title">
                        <span style={{ fontSize: "18px", fontWeight: 900 }}>{info.name}</span>
                        {!detail.flag && <span className="jj iconfont" onClick={() => detail.changeFlag()}>简介 ></span>}
                        {detail.flag && <span className="iconfont jj" onClick={() => detail.changeFlag()}> &#xe652; </span>}
                    </h2>
                    <h2 className="body">
                        <span style={{ color: info.score ? "red" : "inherit" }}>{info.score ? info.score + "分" : "暂无评分"}</span>
                        <span> / </span>
                        {info.displayName && <span>{info.displayName.second ? info.displayName.second.join(" ") : info.displayName.first}</span>}
                        <span> / </span>
                        <span>{info.updateEP ? info.updateEP : "暂无剧集"}</span>
                    </h2>
                    {
                        detail.flag && <div className="more">
                            <WingBlank>
                                <h2>简介</h2>
                                <p>{info.detail}</p>
                            </WingBlank>
                            <WhiteSpace size="lg" />
                        </div>
                    }
                    <div className="section">
                        <div>
                            <p>{info.updateEP ? "剧集" : "暂无剧集"}</p>
                            <span>每周六至周一晚20点更新2集 ></span>
                        </div>
                        {info.updateEP && <div className="ji">
                            <ul>
                                {arr.map(item => (
                                    item
                                ))}
                            </ul>
                        </div>}
                    </div>
                    <div className="talk">
                        <p>评论</p>
                        {
                            !detail.comments.length>0&&<div className="default">
                                <WhiteSpace/>
                                <h2>暂无评论,赶紧来抢沙发吧!</h2>
                            </div>
                        }
                        {detail.comments.map((item, i) => (
                            <div className="each" key={i}>
                                <div className="head">
                                    <div className="img">
                                        <img src={item.pic ? item.pic.replace(/public/, baseURL) : "http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg"} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className="biaoti">{getTele(item.tele)}</div>
                                        <div className="neirong">{item.content}</div>
                                    </div>
                                </div>
                                {item.replay.length > 0 && <div className="re">
                                    {item.replay.map((content, index) => (
                                        <div key={index}>
                                            <WhiteSpace />
                                            <p><span>{getTele(content.tele)} : </span>{content.msg}</p>
                                            <WhiteSpace />
                                        </div>
                                    ))}

                                </div>}
                                <div className="bottom">
                                    <div className="time">{item.time}</div>
                                    <div className="opt">
                                        <div className="zan">
                                            <i className="iconfont">&#xe503;</i>
                                            <span>点赞</span>
                                        </div>
                                        <div className="hui">
                                            <i className="iconfont">&#xe603;</i>
                                            <span>回复</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </WingBlank>
                <div className="foot">
                    <div className="comment" onClick={() => detail.changeSendFlag(true)}>
                        <i className="iconfont">&#xe778;</i>
                        <div className="input"> 不吐不快...</div>
                    </div>
                    <div className="sec">
                        <i className="iconfont">&#xe603;</i>
                        <p>307</p>
                    </div>
                    <div className="sec">
                        <i className="iconfont">&#xe692;</i>
                        <p>收藏</p>
                    </div>
                    <div className="sec">
                        <i className="iconfont">&#xe604;</i>
                        <p>缓存</p>
                    </div>
                    <div className="sec">
                        <i className="iconfont">&#xe609;</i>
                        <p>分享</p>
                    </div>
                    {detail.sendFlag && <div className="msg">
                        <div className="input">
                            <input ref={el => this.comments = el} autoFocus type="text" placeholder="我来说两句" />
                        </div>
                        <div className="send">
                            <span>300</span>
                            <button className="fasong" onClick={() => this.send(this.props.location.search)}>发送</button>
                            <button className="cancel" onClick={() => detail.changeSendFlag(false)}>取消</button>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}
export default Detail;