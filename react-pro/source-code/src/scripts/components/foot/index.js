import "./index.scss";
import React, { Component } from "react"
import { TabBar } from "antd-mobile"
import { connect } from "react-redux"
import { getFoot } from "~/actions"

@connect(
    state => {
        return {
            foot: state.getIn(["foot", "data"])
        }
    }
)
class Foot extends Component {
    render() {
        const {
            foot,
            location,
            history
        } = this.props
        // console.log(location.pathname.indexOf("home")!==-1)
        return (
            <div className="foot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {
                        foot.map((item, i) => (
                            <TabBar.Item
                                title={item.displayText}
                                key={i}
                                icon={<div style={{
                                    width: '.7rem',
                                    height: '.7rem',
                                    background: 'url(' + item.defaultImg + ') center center /  200% auto no-repeat'
                                }}></div>}
                                selected={location.pathname.indexOf(item.name) !== -1}
                                selectedIcon={<div style={{
                                    width: '.7rem',
                                    height: '.7rem',
                                    background: 'url(' + item.activatedImg + ') center center /  200% auto no-repeat'
                                }}
                                />}
                                onPress={() => history.push('/main/' + item.name)}
                            >
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch(getFoot("/react/foot"))
    }
}
export default Foot;
