import { observable, action, computed, autorun } from "mobx"
import { axios ,showToast} from "&"

class Content {

    @observable tuiJian = [];
    @observable tv = [];
    @observable hot1 = [];
    @observable hot2 = [];
    @observable live1 = [];
    @observable live2 = [];
    @observable history=[];
    @observable tabs = [
        { title: "电视剧", type: "TV_PLAY" },
        { title: "电影", type: "MOVIE" },
        { title: "综艺", type: "VARIETY_SHOW" },
        { title: "少儿动漫", type: "MANGA" }
    ];


    @action getTuiJian = async () => {
        const res1 = await axios.get("/react/tv1");
        this.tuiJian = res1.data.result;
        const res3 = await axios.get("/react/tv2");
        this.tv = res3.data.result;
        const res2 = await axios.get("/react/hot1");
        this.hot1 = res2.data.result;
        const res4 = await axios.get("/react/hot2");
        this.hot2 = res4.data.result;
        const res5 = await axios.get("/react/live1");
        this.live1 = res5.data.result;
        const res6 = await axios.get("/react/live2");
        this.live2 = res6.data.result;
    }

    @observable key = "";

    @action setKey=(keyword)=>{
        this.key=keyword;
    }

    @computed get flag(){
        var flag=false;
        if(this.history.length>0){
            flag=true
        }
        return flag
    }

    @observable all=[];

    //清空搜索历史
    @action clearHistory= async ()=>{
        const res=await axios.post("/react/clearHistory");
        this.history=[];
    }

    @observable initialPage=0;
    @action getAll =async (query)=>{
        const res=await axios.get("/react/all",{params:{query}});
        this.all=res.data.result;
    }

    @observable search=[];
    @action clearSearch=()=>{
        this.search=[]
    }
    @action getSearch=async ({key,flag})=>{
        console.log(key)
        if(flag){
            axios.post("/react/searchHistory",{flag}).then(res=>{
                this.history=res.data.history;
            })
        }else{
            if(key){
                axios.post("/react/searchHistory",{key,flag}).then(res=>{
                    // console.log(res.data)
                    if(this.history.indexOf(key)!==-1){
                        let i=this.history.indexOf(key);
                        this.history.splice(i,1)
                    }
                    this.history.unshift(key);
                    this.key="";
                })
                const res=await axios.get("/react/all",{params:{key}});
                this.search=res.data.result
                console.log(res.data.result)
            }else{
                showToast("请输入关键字")
            }
        }
    }
}

export default new Content();