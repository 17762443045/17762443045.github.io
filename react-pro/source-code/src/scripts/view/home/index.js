import "./index.scss";
import React, { Component } from "react"
import { connect } from "react-redux";
import Head from "~/components/head"
import { Tabs } from "antd-mobile"
import Content from "~/components/content"


@connect(
    state => ({
        tabs: state.getIn(["data", "tabs"]).toJS()
    })
)
class Home extends Component {
    renderContent = tab =>
        (<div ref="two" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: "relative", height: "40rem", backgroundColor: '#fff'}}>
            <div style={{ width: "100%", position: "absolute", top: 0, left: 0 }}>
                <Content />
            </div>
        </div>);
    render() {

        const {
            tabs
        } = this.props
        // console.log(tabs)
        return (
            <div ref="one">
                <Head history={this.props.history} />
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    {this.renderContent}
                </Tabs>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs)
        console.log(this.refs.one.clientHeight)
    }
}
export default Home;