import "./index.scss";
import React, { Component } from "react"
import { connect } from "react-redux";
import Foot from "~/components/foot"
import LazyLoad from "&/lazyload";

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"


@connect()
class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/main/home" />} />
                    <Route path="/main/home" component={LazyLoad(() => import("../home"))} />
                    <Route path="/main/sport" component={LazyLoad(() => import("../sport"))} />
                    <Route path="/main/vip" component={LazyLoad(() => import("../vip"))} />
                    <Route path="/main/square" component={LazyLoad(() => import("../square"))} />
                    <Route path="/main/mine" component={LazyLoad(() => import("../mine"))} />
                    <Route render={() => <Redirect to="/main/home" />} />
                </Switch>
                <Foot location={this.props.location} history={this.props.history}/>
            </div>
        )
    }
}
export default Main;