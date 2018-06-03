import React from "react";

export default class DetailMantan extends React.Component {
    render() {
        return(
            <li>nama : {this.props.nama}, umur : {this.props.umur}</li>
        )
    }
}