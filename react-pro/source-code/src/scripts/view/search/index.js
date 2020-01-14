import "./index.scss";
import React, { Component } from "react";
import { SearchBar, WhiteSpace, WingBlank, Tabs } from "antd-mobile"
import { observer } from "mobx-react";
import content from "~/mobx/content";

@observer
class Search extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
        let type = content.tabs[content.initialPage].type;
        content.getAll(type);
        content.getSearch({ flag: true })
    }
    getKey = (key) => {
        content.setKey(key);
    }
    goBack = () => {
        content.clearSearch();
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
                <SearchBar placeholder="请输入关键字" onClear={value => console.log(value, 'onClear')} ref={ref => this.autoFocusInst = ref} value={content.key} onChange={(value) => this.getKey(value)} onSubmit={(value) => content.getSearch({ key: value })} />
                <div className="back">
                    <p onClick={this.goBack}>返回上一页</p>
                </div>
                {content.search.length <= 0 && <WingBlank>
                    {content.flag && <div className="history">
                        <p>
                            <span>搜索历史</span>
                            <span className="clear" onClick={() => content.clearHistory()}>清空</span>
                        </p>
                        <p className="myhistory" style={{ width: "100%" }}>
                            {
                                content.history.map((item, i) => (
                                    <span onClick={() => content.getSearch({ key: item })} className="one" key={i} >{item}</span>
                                ))
                            }
                        </p>
                    </div>}
                    <div className="type">
                        <Tabs tabs={content.tabs}
                            tabBarBackgroundColor="rgba(#000,0)"
                            initialPage={content.initialPage}
                            onChange={(tab, index) => { content.getAll(tab.type) }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div style={{ height: '7rem' }}>
                                {content.all.map((item, i) => (
                                    <div onClick={() => content.getSearch({ key: item.name })} className="each" key={i}>
                                        <span>{i + 1}.</span>
                                        {item.name}</div>
                                ))}
                            </div>
                            <div style={{ height: '150px' }}>
                                {content.all.map((item, i) => (
                                    <div onClick={() => content.getSearch({ key: item.name })} className="each" key={i}>
                                        <span>{i + 1}.</span>
                                        {item.name}</div>
                                ))}
                            </div>
                            <div style={{ height: '150px' }}>
                                {content.all.map((item, i) => (
                                    <div onClick={() => content.getSearch({ key: item.name })} className="each" key={i}>
                                        <span>{i + 1}.</span>
                                        {item.name}</div>
                                ))}
                            </div>
                            <div style={{ height: '150px' }}>
                                {content.all.map((item, i) => (
                                    <div onClick={() => content.getSearch({ key: item.name })} className="each" key={i}>
                                        <span>{i + 1}.</span>
                                        {item.name}</div>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </WingBlank>}
                {content.search.length > 0 && <div>
                    <h2>共搜索到{content.search.length}条结果.</h2>
                    <div style={{ width: "100%", padding: "5px .2rem", borderBottom: "1px solid gray" }}></div>
                    {content.search.map((item, i) => (
                        <div className="content" key={i}>
                            <WingBlank>
                                <WhiteSpace size="lg" />
                                <div className="img">
                                    <img src={item.pics.lowResolutionH} alt="" />
                                </div>
                                <div className="detail">
                                    <p className="name">{item.name}</p>
                                    <p className="title">{item.title}</p>
                                    <p className="item">{item.actor ? "主演 : " + item.actor : ""}</p>
                                    <p className="item">{item.displayName ? "类型 : " + item.displayName.first : ""}</p>
                                </div>
                                <WhiteSpace size="md" />
                            </WingBlank>
                        </div>
                    ))}
                </div>}
            </div>
        )
    }
}
export default Search