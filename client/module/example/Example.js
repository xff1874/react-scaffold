import React from "react";
require("../../style/example.less");





export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: props.hello || "ttt"
        }
        this.onClick = this.onClick.bind(this)
    }
    componentWillMount() {

    }
    onClick() {
        alert("ddd");

    }

    render() {
        return (
            <div>
                <div onClick={this.onClick}> click dd me {this.state.hello}</div>
                <img src={require('../../../static/search.png')} />
                <img src={require('../../../static/search.png')} />
                <img src="http://p1.music.126.net/7AGS-0gGxvJt3tLV-EDt3Q==/18911599998058601.jpg" />
            </div>)
    }
}