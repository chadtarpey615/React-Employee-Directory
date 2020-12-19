import React from "react";
import Header from "./layout/Header";
import Employee from "../src/component/employee/Employee";
import Wrapper from "./Wrapper";


function App(props) {


  return (
    <Wrapper>
    <Header />
    <Employee />
    </Wrapper>
  );
}

export default App;
