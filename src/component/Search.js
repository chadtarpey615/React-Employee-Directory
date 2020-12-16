import React, { Component } from "react";
import Wrapper from "../Wrapper";

class Search extends Component {
    state = {
      employee: []
    }

    componentDidMount() {
      fetch("src/utils/employees.json")
      .then(response => response.json())
      .then(data => this.setState({ data }))
    }


    onSubmit = event => {
        event.PreventDefault();
        this.setState({ name: ""})
    }

    onChange = event => this.setState({})
    render() {
        return (
            <form className="d-flex justify-content-center" onSubmit={this.onSubmit}>
                <input 
                
                type="text"
                name="name"
                placeholder="search"
                value={this.state.name}
                onChange={this.onChange}
                />
            </form>
        )
    }
}




export default Search

