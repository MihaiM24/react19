import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "./Age";
export class App extends React.Component{
    render(){
        return <Welcome name={"John"} age={12} renderAge={true}/>
    }
}