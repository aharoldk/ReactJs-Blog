import React from "react";
import DetailMantan from "./DetailMantan"

export default class ListMantan extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map(lists => 
                        <DetailMantan nama={lists.nama} umur={lists.umur} />
                    )}
                </ul>
            </div>
        )
    }
}