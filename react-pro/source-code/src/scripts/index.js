import React, { Component } from "react";
import {
    HashRouter as Hash,
    // Route,
} from "react-router-dom";
import store from "./store"
import { Provider } from "react-redux"
import MainLayout from "./view"

export class MainRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <Hash basename="">
                    <MainLayout />
                </Hash>
            </Provider>
        )
    }
}