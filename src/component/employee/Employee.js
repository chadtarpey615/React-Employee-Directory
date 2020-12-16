import React, { Component } from "react";
import employees from "../../utils/employees.json";
import Wrapper from "../../Wrapper/index"
import Table from "../../layout/Table";
import TableHeader from "../../layout/TableHeader";

class Employee extends Component {

    state = {
        employees: employees.results
    }

    render() {
        console.log(this.state.employees)
        return (

            <Wrapper>
                {this.state.employees.map(employee => {
                    return (
                        <Table

                            image={employee.picture.thumbnail}
                            title={[employee.name.first, employee.name.last]}
                            phone={employee.cell}
                            email={employee.email}
                            date={employee.dob.date}
                        />
                    )
                })}
            </Wrapper>
        )
    }

}

export default Employee;