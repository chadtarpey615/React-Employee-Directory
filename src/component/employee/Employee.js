import React, { Component } from "react";
import employees from "../../utils/employees.json";
import Wrapper from "../../Wrapper/index"
import Table from "../../layout/Table";
import TableHeader from "../../layout/TableHeader";

class Employee extends Component {

    state = {
        root: employees.results,
        employees: employees.results,
        search: ""
    }

    onChange = event => {
        let value = event.target.value
        console.log(value)
        let filteredArr = this.state.root.filter(filtered => filtered.name.first.includes(value) || filtered.name.last.includes(value))
        console.log(filteredArr);
        this.setState({ employees: filteredArr });
    }


    render() {
        console.log(this.state.employees)
        return (
            <>
            <form className="d-flex justify-content-center" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="search"
                    onChange={this.onChange}
                />
            </form>
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date Of Birth</th>

                        </tr>
                    </thead>
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
                    </table>
            </div>
            </>
        )
    }

}

export default Employee;