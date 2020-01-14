import { observable, action, computed, autorun } from "mobx"
import { axios ,showToast} from "&"

class Detail {

    @observable info={}

    @action getInfo = async (id)=>{
        const res= await axios.post("/react/detail",{pID:id})
        console.log(res.data.result)
        this.info= res.data.result
    }

    @observable flag=false;
    @action changeFlag(){
        this.flag=!this.flag
    }

    @observable sendFlag=false;
    @action changeSendFlag(flag){
        this.sendFlag=flag
    }

    @observable comments=[];
    @action getComment=async ({comments,pid})=>{
        console.log(comments,pid)
        if(comments){
            const res=await axios.post("/react/comments",{comments,pid});
            this.commentList(pid);
        }else{
            showToast("请输入评论内容!")
        }
    }
    @action commentList=async (pid)=>{
        const res=await axios.post("/react/getComment",{pid});
        this.comments=res.data.result
    }

}

export default new Detail()