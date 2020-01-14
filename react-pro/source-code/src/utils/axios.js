import axios from "axios";
import { Toast } from "antd-mobile"
import { history } from "&"

const baseURL = 'http://192.168.50.132:1232/';
// const baseURL = 'http://123.57.6.111:1232/'; //公网

axios.defaults.baseURL = baseURL;

let token = "";
axios.defaults.headers.common["token"] = token;//req.headers.token取
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

function loadingToast(msg, time) {
    msg = msg || "请求中";
    time = time || 1;
    Toast.hide();
    Toast.loading(msg, time, () => {
        console.log('Load complete !!!');
    });
}
export function fail(msg) {
    Toast.hide();
    Toast.fail(msg, 1);
}

export function offline(msg) {
    Toast.hide();
    Toast.offline(msg, 1);
}

export function success(msg) {
    Toast.hide()
    Toast.success(msg, 1);
}

//axios拦截器 Interceptors
//request 请求发送之前的拦截器
axios.interceptors.request.use(function (config) {
    //配置动画
    loadingToast();
    token = sessionStorage.token ? sessionStorage.token : "";
    config.headers["token"] = token;
    return config;
}, function (error) {
    //请求错误提示
    offline("请求失败,网络异常")
    return Promise.reject(error);
})

//response 响应完成拦截器
axios.interceptors.response.use(function (response) {
    // console.log(response)
    // if (response.data.code === "3000") {
    //     history.push("/login")
    // }
    // type  不存在    success
    // type = 0  fail
    // type = 1  success 
    if (!!response.data.type) {
        success(response.data.msg);
    } else {
        if (response.data.type === 0) {
            fail(response.data.msg)
        } else {
            success(response.data.msg)
        }
    }
    // 成功的响应
    return response;
}, function (error) {
    // 失败的响应 
    fail("响应失败-服务器异常")
    return Promise.reject(error);
})


export { axios, baseURL }