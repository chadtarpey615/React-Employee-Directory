import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "../Wrapper/index";
import "./table.css"

function Table(props) {
    return (
        <Wrapper>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="col-sm-2"><img alt={props.name} src={props.image}></img></td>
                        <td className="col-sm-2">{props.title}</td>
                        <td className="col-sm-2">{props.phone}</td>
                        <td className="col-sm-2">{props.email}</td>
                        <td className="col-sm-2">{props.date}</td>
                    </tr>
                </tbody>
            </table>
        </Wrapper>
    )
}



export default Table;
