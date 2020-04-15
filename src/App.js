import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Sort from "./components/Sort";
import employees from "./employees.json";



class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    results: []
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employee equal to the new employees array
    this.setState({ employees });
  };




  sortEmployeesName = () => {
    console.log("sort Name");

    const sort_by = (field, reverse, primer) => {

      const key = primer ?
        function (x) {
          return primer(x[field])
        } :
        function (x) {
          return x[field]
        };
      reverse = !reverse ? 1 : -1;
      return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    }
    const homies = this.state.employees;

    console.log(homies.sort(sort_by('last', false, (a) => a.toUpperCase()
    )));

    this.setState({ homies });
  };

  sortEmployeesYears = () => {
    console.log("sort Years");

    const sort_by = (field, reverse, primer) => {

      const key = primer ?
        function (x) {
          return primer(x[field])
        } :
        function (x) {
          return x[field]
        };
      reverse = !reverse ? 1 : -1;
      return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    }
    const homies = this.state.employees;

    console.log(homies.sort(sort_by('years', true, parseInt)));

    this.setState({ homies });
  };


  sortEmployeesCategory = () => {
    console.log("sort Category");

    const sort_by = (field, reverse, primer) => {

      const key = primer ?
        function (x) {
          return primer(x[field])
        } :
        function (x) {
          return x[field]
        };
      reverse = !reverse ? 1 : -1;
      return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    }
    const homies = this.state.employees;

    console.log(homies.sort(sort_by('category', false, (a) => a.toUpperCase()
    )));

    this.setState({ homies });
  };

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {

    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Sort
          sortEmployeesName={this.sortEmployeesName}
          sortEmployeesYears={this.sortEmployeesYears}
          sortEmployeesCategory={this.sortEmployeesCategory}
        ></Sort>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            first={employee.first}
            last={employee.last}
            years={employee.years}
            category={employee.category}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
