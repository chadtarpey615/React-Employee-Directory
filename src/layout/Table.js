import React from "react";
import employees from "../utils/employees.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = employees.map((data ) => {
    console.log(data)
    //console.log(Array.from(data))
    
    return (
        <div>
          <table>{data.results.gender}</table>
        </div>
    )
}
)

export default Table;
