import React from "react";
import Header from "./layout/Header";
import Employee from "../src/component/employee/Employee";
import TableHead from "./layout/TableHeader";
import Search from "../src/component/Search"

//import Table from "./layout/Table.js"

function App() {
  return (
    <div>
    <Header />
    <Search />
    <TableHead />
    <Employee />
    </div>
  );
}

export default App;
