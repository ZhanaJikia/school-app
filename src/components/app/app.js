import React, {Component} from "react";
import ValidatedSchoolForm from '../schoolForm';
import SchoolTable from '../schoolTable';
import StudentTable from '../studentsTable';
import '../studentsTable';
import "./app.css";


const globalData = [
  {
    id: 3,
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
    id: 1,
    schoolName: "№108",
    address: "Tsereteli 3",
    students: [
      { fullName: "Elene Kvaratskhelia", email: "eleneKvaratskhelia@gmail.com", age: 18 },
      { fullName: "Zhana Jikia", email: "zhanajikia@gmail.com", age: 17 }
    ]
  }
];

export default class App extends Component {

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

  onDeleted = (id) => {
    this.setState( ({ schools }) => {
      // const index = schools.findIndex( (el) => el.id === id);

      // const newSchools = [ 
        // ...schools.slice(0, index),
        // ...schools.slice(index + 1) 
      // ];

    const newSchools = schools.filter(item => item.id !== id)
    console.log("zanaaaa", id)
      
      return {
        schools: newSchools
      }
    })
  };

  deleteStudent = (email, id) => {
    this.setState( ({ schools }) => {
      const index = schools.findIndex( (el) => el.id === id);

      const currSchool = schools[index]

      const newStudents = currSchool.students.filter(student => student.email !== email)
      console.log(newStudents)


      schools = schools.map(school => school.id !== id ? school : { ...school, students: newStudents })
      console.log(schools)
      
      return {
        schools,
        currentStudents: newStudents
      }
    })
  };
  

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
          onDeleted={this.onDeleted}
          deleteStudent={this.deleteStudent}
        />

      </div>
    );
  }
}
