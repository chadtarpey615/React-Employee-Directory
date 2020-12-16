import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "../Wrapper/index";
import "./table.css"

function Table(props) {
    return (
        
            <tbody>
                <tr>
                    <td><img alt={props.name} src={props.image}></img></td>
                    <td>{props.title[0]} {props.title[1]}</td>
                    <td>{props.phone}</td>
                    <td><a href={props.email}>{props.email}</a></td>
                    <td>{props.date}</td>
                </tr>
            </tbody>
           
    )
}



export default Table;
