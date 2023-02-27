import React from "react";
import { App } from "./App";
import { Age } from "./Age";
export class Welcome extends React.Component{
    render(){
        return (
        <div>
            <p>Welcome, {this.props.name}</p>
            {this.props.name==="John"  ?  <Age age={this.props.age}/>  :  "Incorrect name"}
            
        </div>
        )
    }
}
Welcome.defaultProps={
    name: "Mihai"
}