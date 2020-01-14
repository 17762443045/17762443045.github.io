import React,{Component} from "react"
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
// import Main from "./main"
import LazyLoad from "&/lazyload";
export default class MainLayout extends Component {
    render(){
        return(
            <div className="main">
                <Switch>
                    <Route path="/" exact render={()=><Redirect to="/guide"/>}/>
                    <Route path="/main" component={LazyLoad(()=>import("./main"))}/>
                    <Route path="/guide" component={LazyLoad(()=>import("./guide"))}/>
                    <Route path="/login" component={LazyLoad(()=>import("./login"))}/>
                    <Route path="/detail" component={LazyLoad(()=>import("./detail"))}/>
                    <Route path="/search" component={LazyLoad(()=>import("./search"))}/>
                    <Route render={()=><Redirect to="/guide"/>}/>
                </Switch>
            </div>
        )
    }
}