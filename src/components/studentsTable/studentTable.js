import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StudentForm from '../studentForm';
import DeleteModal from '../deleteModal/index';
import "../schoolTable/schoolTable.css";
import "./modal.css";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    overflowX: "auto",
  },
  button: {
    textAlign: "center",
    marginTop: theme.spacing(2)
  }
}));

const StudentTable = ({ students, setStudents, id, deleteStudent }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false)

  if(isOpen){
    return <StudentForm setIsOpen={setIsOpen} setStudents={setStudents} id={id}/>
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.name} className={classes.pointer}>
                {deleteModalOpen && (<DeleteModal deleteStudent={deleteStudent} setDeleteModalOpen={setDeleteModalOpen} student={student} id={id} />)}
                <TableCell component="th" scope="row">
                  {student.fullName}
                </TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.age}</TableCell>
                {/* <TableCell align="right">{
                    <button
                      className="btn btn-outline-danger btn-sm float-right" 
                      onClick={ () => deleteStudent(students.email, id) }>
                      <i className="fa fa-trash-o"/>
                    </button> 
                    }
                </TableCell> */}
                  <TableCell align="right">{
                    <button
                      className="btn btn-outline-danger btn-sm float-right" 
                      onClick={ () => setDeleteModalOpen(true) }>
                      <i className="fa fa-trash-o"/>
                    </button> 
                    }
                  </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <button type="submit" onClick={() => setIsOpen(true)} className={classes.button}>Add Student</button>
    </div>
  );
};

export default StudentTable;
