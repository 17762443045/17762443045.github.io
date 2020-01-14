import { Toast } from "antd-mobile"
import { createHashHistory } from "history"


export { axios, baseURL } from "./axios"

export function showToast(text) {
    Toast.info(text, 1);
}

export function getTele(tele) {
    tele = sessionStorage.tele.toString();
    tele = tele.split("")
    tele.splice(3, 4, "****").join("")
    return tele
}

export function getTime(time){
    let date=new Date(time)
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    month=month>9?month:"0"+month;
    let day=date.getDate();
    day=day>9?day:"0"+day;
    return `${year}-${month}-${day}`
}

export const history = new createHashHistory()