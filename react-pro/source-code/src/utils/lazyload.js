//路由懒加载
import React from "react";
import Loadable from "react-loadable"
import { Toast, Button } from "antd-mobile"


function loadingToast() {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
}

class ToastExample extends React.Component {
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
        setTimeout(() => {
            Toast.hide();
        }, 500);
    }
    render() {
        return (
            <Button onClick={loadingToast}>loading</Button>
        );
    }
}
//loading组件通用的 如果传入loading,有动画
export default (loader, loading = ToastExample) => {
    return Loadable({
        loader,     //需要懒加载的组件
        loading
    })
}