import { axios, baseURL } from "&"

export const changeTime = {
    type: "changeTime"
}

export async function getFoot(url) {
    const res = await axios.get(url);
    return {
        type: "getFoot",
        payload: res.data
    }
}

export const changeFlag = () => {
    // console.log(sessionStorage)
    let flag = !!sessionStorage.tele;
    return {
        type: "changeFlag",
        payload: flag,
        // callback: () => {
        //     history.push("/main/home")
        // }
    }
}

export const changeMobile = (payload) => {
    return {
        type: "changeMobile",
        payload
    }
}


export async function getCode(payload) {
    const res = await axios.post("/react/aly/sendSms", { tele: payload, time: new Date() });
    console.log(res)
    return {
        type: "getCode",
        payload: res.data.params + ""
        // payload:"1234"
    }
}

export async function changeHead(data) {
    const res = await axios.post("/react/uploadImg", data);
    let url = "http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg";
    if (res.data.pic) {
        url = res.data.pic.replace(/public/, baseURL)
        const userInfo = JSON.stringify({
            mobile: res.data.mobile,
            url
        });
        localStorage.userInfo = userInfo;
    } else {
        localStorage.userInfo = "";
    }
    return {
        type: "changeHead",
        payload: url
    }
}

export const resetHead = () => {
    let url = "http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg";
    return {
        type: "changeHead",
        payload: url
    }
}

export const getHead=(pic)=>{
    console.log(pic)
    return{
        type: "changeHead",
            payload: pic
    }
}

