import React from "react";
import ValidatedSchoolForm from '../schoolForm/validatedSchoolForm';
import SchoolTable from '../schoolTable/schoolTable';
import '../studentsTable/studentTable';
import "./app.css";


const globalData = [
  {
    id: 1,
    schoolName: "№34",
    address: "Chavchavadze 23",
    students: [
      { fullName: "Megi Jikia", email: "megijikia@gmail.com", age: 17 },
      { fullName: "Genji Genji", email: "genjigenji@gmail.com", age: 18 },

    ]
  },
  {
    id: 2,
    schoolName: "№98",
    address: "Vazha 8",
    students: [
      { fullName: "Davit Bokhua", email: "davitbokhua@gmail.com", age: 18 },
      { fullName: "Vato Vatexa", email: "vatovatexa@gmail.com", age: 17 },
    ]
  },
  {
    id: 3,
    schoolName: "№108",
    address: "Tsereteli 3",
    students: [
      { fullName: "Elene Kvaratskhelia", email: "eleneKvaratskhelia@gmail.com", age: 18 },
      { fullName: "Zhana Jikia", email: "zhanajikia@gmail.com", age: 17 }
    ]
  }
];

export default class App extends React.Component {
  state = {
    schools: globalData,
    currentStudents: []
  }

  callbackFunction = (childData) => {
    this.setState({schools: [childData, ...this.state.schools ]})
  }

  setStudents = (student, id) => {
    this.setState(({ schools }) => {
      const newSchools = schools
      const found = newSchools.find(item => item.id === id)
      found.students = [...found.students, student]
      return ({
        schools: newSchools,
        currentStudents:  found.students
      })
    })
  }

  setCurrentStudents = (students) => (
    this.setState({ currentStudents: students })
  )

  render(){
    return (
      <div className="App">
        <h1>Add New School</h1>
        <ValidatedSchoolForm
          schools={this.state.schools}
          handleAdd={this.callbackFunction}
        />
        <SchoolTable
          schools={this.state.schools}
          setStudents={this.setStudents}
          students={this.state.students}
          setCurrentStudents={this.setCurrentStudents}
          currentStudents={this.state.currentStudents}
        />
      </div>
    );
  }
}
