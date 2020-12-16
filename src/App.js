import React from "react";
import Header from "./layout/Header";
import Employee from "../src/component/employee/Employee";
import TableHeader from "./layout/TableHeader";
import Search from "../src/component/Search"
import Wrapper from "./Wrapper";

//import Table from "./layout/Table.js"

function App() {
  return (
    <div>
    <Header />
    <Search />
    <TableHeader />
    <Employee />
    </div>
  );
}

export default App;
