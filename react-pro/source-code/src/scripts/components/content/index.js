import "./index.scss"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Carousel, WhiteSpace, Button, WingBlank } from "antd-mobile"
import { observer } from "mobx-react"
import content from "~/mobx/content"
import {
    NavLink
} from "react-router-dom"

@connect(
    state => ({
        banner: state.getIn(["data", "banner"]).toJS(),
    })
)
@observer
class Content extends Component {

    componentWillMount() {
        if (!content.tuiJian.length > 0) {
            content.getTuiJian();
        }
    }
    render() {
        // console.log(content.tv[2])
        const {
            banner
        } = this.props

        return (
            <div className="body">
                <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    infinite
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => this.setState({ slideIndex: index })}
                >
                    {banner.map((val, index) => (
                        <div key={index}>
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: "100%" }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
                <WhiteSpace size="lg" />
                <div className="sec">
                    <div className="title">
                        <span className="left">重磅推荐</span>
                        <span className="right">揭秘UFO事件真相 ></span>
                    </div>
                    <div className="content">

                        {
                            content.tuiJian.map((item, i) => (
                                <div className="area" key={i}>
                                    <NavLink to={"/detail?pid=" + item.pID}>
                                        <div className="img">
                                            <img src={item.pics.lowResolutionH} alt="" />
                                            <p className="tip">{item.updateEP ? item.updateEP : item.score}</p>
                                        </div>
                                        <div className="name">{item.name}</div>
                                        <div className="jieshao">{item.title}</div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <WingBlank>
                    <Button icon={<img src="http://img.cmvideo.cn:8080/publish/noms/v1/icon_button_default_3.png" alt="" />} type="info">更多精彩热播</Button>
                </WingBlank>
                <div className="sec">
                    <div className="content">
                        {
                            content.hot1.map((item, i) => (
                                <div className="area" key={i}>
                                    <NavLink to={"/detail?pid=" + item.pID}>
                                        <div className="img">
                                            <img src={item.pics.lowResolutionV} alt="" />
                                            <p className="tip">{item.duration}</p>
                                        </div>
                                        <div className="name">{item.name}</div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <WingBlank style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button icon={<img src="http://img.cmvideo.cn:8080/publish/noms/v1/icon_button_default_3.png" alt="" />} type="info" inline style={{ width: "3rem" }}>更多资讯</Button>
                    <Button type="info" icon={<img src="http://img.cmvideo.cn:8080/publish/noms/v1/icon_button_default_4.png" alt="" />} inline size="large" style={{ width: "3rem" }}>换一换</Button>
                </WingBlank>
                <div className="sec">
                    <div className="title">
                        <span className="left">电视剧</span>
                        <span className="right">全部电视剧 ></span>
                    </div>
                    <div className="content">
                        {
                            content.tv.map((item, i) => (
                                i == 4 && <div className="area big" key={i}>
                                    <NavLink to={"/detail?pid=" + item.pID}>
                                        <div className="img">
                                            <img src={item.pics.lowResolutionH} alt="" />
                                            <p className="tip">{item.updateEP ? item.updateEP : item.score}</p>
                                        </div>
                                        <div className="name">[{item.name}] 更新中....</div>
                                        <div className="jieshao">{item.title}</div>
                                    </NavLink>
                                </div>
                            ))
                        }
                        {
                            content.tv.map((item, i) => (
                                <div className="area" key={i}>
                                    <NavLink to={"/detail?pid=" + item.pID}>
                                        <div className="img">
                                            <img src={item.pics.lowResolutionH} alt="" />
                                            <p className="tip">{item.updateEP ? item.updateEP : item.score}</p>
                                        </div>
                                        <div className="name">{item.name}</div>
                                        <div className="jieshao">{item.title}</div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <WingBlank>
                    <Button icon={<img src="http://img.cmvideo.cn:8080/publish/noms/v1/icon_button_default_3.png" alt="" />} type="info">全部电视剧</Button>
                </WingBlank>
                <div className="sec">
                    <div className="title">
                        <span className="left">热点</span>
                        <span className="right">大家都在看 ></span>
                    </div>
                    <div className="content">
                        {
                            content.hot2.map((item, i) => (
                                <div className="area" key={i}>
                                    <NavLink to={"/detail?pid=" + item.pID}>
                                        <div className="img">
                                            <img src={item.pics.lowResolutionV} alt="" />
                                            <p className="tip">{item.duration}</p>
                                        </div>
                                        <div className="name">{item.name}</div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <WingBlank>
                    <Button icon={<img src="http://img.cmvideo.cn:8080/publish/noms/v1/icon_button_default_3.png" alt="" />} type="info">查看更多热点</Button>
                </WingBlank>
                <div className="sec">
                    <div className="title">
                        <span className="left">热门直播</span>
                        <span className="right">查看全部电视台 ></span>
                    </div>
                    <div className="nav">
                        {
                            content.live1.map((item, i) => (
                                <div key={i}>
                                    <img src={item.pics.lowResolutionH} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="content">
                        {
                            content.live2.map((item, i) => (
                                <div className="area" key={i}>
                                    <NavLink to={"/detail?pid=" + item.pID}>
                                        <div className="img">
                                            <img src={item.pics.lowResolutionH} alt="" />
                                            <p className="tip">{item.updateTimeDesc}</p>
                                        </div>
                                        <div className="name">{item.name}</div>
                                        <div className="jieshao">{item.title}</div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;