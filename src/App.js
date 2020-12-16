import React from "react";
import Header from "./layout/Header";
import Employee from "../src/component/employee/Employee";
import TableHeader from "./layout/TableHeader";
import Wrapper from "./Wrapper";

//import Table from "./layout/Table.js"

function App() {


  return (
    <Wrapper>
    <Header />
    {/* <TableHeader /> */}
    <Employee />
    </Wrapper>
  );
}

export default App;
