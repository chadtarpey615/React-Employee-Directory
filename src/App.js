import React from "react";
import Header from "./layout/Header";
import Employee from "../src/component/employee/Employee";
import TableHeader from "./layout/TableHeader";
import Wrapper from "./Wrapper";
import Form from "./layout/Form";

//import Table from "./layout/Table.js"

function App(props) {


  return (
    <Wrapper>
    <Header />
    <Employee />
    </Wrapper>
  );
}

export default App;
