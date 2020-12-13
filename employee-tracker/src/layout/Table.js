import React from "react";

function Table(props) {
    return (
        <div className="table">
            <tr>{props.name}</tr>
        </div>
    )
}

export default Table;