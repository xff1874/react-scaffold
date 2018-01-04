import React from "react";



export default class SSR16 extends React.Component {

    onClick() {
        alert("hhhh")
    }

    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                span ssr16
            </div>
        )
    }
}

