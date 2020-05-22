import React from "react";
import {Link} from "react-router-dom";

//Components


function ToolBar(props){
    return (
        <div className="ToolBar">
            <h1>LOGO</h1>
            <nav className="Routes">

                <Link to="/">Burger Builder</Link>
 
                <Link to="/orders">Orders</Link>

            </nav>
        </div>
    )
}

export default ToolBar