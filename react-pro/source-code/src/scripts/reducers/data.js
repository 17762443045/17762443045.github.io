import immutable from "immutable"

const defaultState = immutable.fromJS({
    banner: [
        "http://img.cmvideo.cn:8080/publish/noms/2020/01/07/1O24514L11GGE.jpg",
        "http://img.cmvideo.cn:8080/publish/noms/2020/01/07/1O2451D8O2HAE.jpg",
        "http://img.cmvideo.cn:8080/publish/noms/2020/01/07/1O24514MJCLGN.jpg",
        "http://img.cmvideo.cn:8080/publish/noms/2020/01/07/1O24514N3TTPI.jpg"
        // require("@/assets/images/banner1.jpg"),
        // require("@/assets/images/banner2.jpg"),
        // require("@/assets/images/banner3.jpg"),
        // require("@/assets/images/banner4.jpg"),
    ],
    flag: !!sessionStorage.tele,
    mobile: "",
    code: "",
    pic: "http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg",
    tabs: [
        { title: '精选' },
        { title: '庆余年' },
        { title: '热点' },
        { title: '电视剧' },
        { title: '电影' },
        { title: '综艺' },
        { title: '直播' },
        { title: 'PP体育' },
        { title: '湖北' },
        { title: '儿童' },
        { title: '纪实' },
        { title: '娱乐*音乐' },
        { title: '资讯*军事' },
        { title: '生活*搞笑' },
        { title: '知识*动漫' },
    ]
})

export const data = (state = defaultState, action) => {
    // console.log(action)
    switch (action.type) {

        case "getCode":
            return state.set("code", action.payload)

        case "changeFlag":
            return state.set("flag", action.payload)

        case "changeMobile":
            return state.set("mobile", action.payload)

        case "changeHead":
            return state.set("pic", action.payload)
            // var obj = { ...state.toJS(), ...action.payload };
            // return immutable.fromJS(obj);

        default:
            return state;
    }
}