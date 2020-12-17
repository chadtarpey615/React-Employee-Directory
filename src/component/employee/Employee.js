import React, { Component } from "react";
import employees from "../../utils/employees.json";
import Table from "../../layout/Table";
import Button from "../../component/button"

class Employee extends Component {

    state = {
        sorted: employees.results,
        root: employees.results,
        employees: employees.results,
        search: "",

    }

    onChange = event => {
        let value = event.target.value
        //console.log(value)
        let filteredArr = this.state.root.filter(filtered => filtered.name.first.includes(value) || filtered.name.last.includes(value) || filtered.dob.date.includes(value) || filtered.email.includes(value))
        //console.log(filteredArr);
        this.setState({ employees: filteredArr });

    }

    onSort = () => {
        let sortArr = this.state.sorted

        sortArr.sort(function (a,b) {
            let lastNameA= a.name.last.toUpperCase();
            let lastNameB = b.name.last.toUpperCase();
            if (lastNameA < lastNameB) {
                return -1;
            }
            if (lastNameA > lastNameB) {
                return 1
            }
            return 0;

        });
        this.setState({ employees: sortArr})

        }

         
      
    


    render() {
       // console.log(this.state.employees)
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
                            <th scope="col">Name <button onClick={this.onSort}>Sort</button></th> 
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