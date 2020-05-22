import React from "react";
import {Route} from "react-router-dom";
//CMP
import ToolBar from "./../ToolBar/ToolBar";
import BurgerBuilder from "./../BurgerBuilder/BurgerBuild";
import Orders from "./../Orders/Orders";

function Layout( props ) {
    return (
        <div className="Layout">
            <ToolBar />
            <main className="MainView">
                <Route path="/" component={BurgerBuilder} exact={true}/>
                <Route path="/orders" component={Orders}/>
            </main>
        </div>
    )
}

export default Layout;