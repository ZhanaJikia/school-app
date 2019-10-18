import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// For Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import StudentTable from "../studentsTable/studentTable"
import "./schoolTable.css"


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  pointer: {
    cursor: 'pointer'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));

const SchoolTable = ({ schools, currentStudents, setCurrentStudents, setStudents }) => {

  const [open, setOpen] = useState(false)
  const [id, setId] = useState()
  const classes = useStyles();

  const handleOpen = (students, id) => {
    setCurrentStudents(students)
    setId(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="content-wrapp">
      <div className="split left">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>School Name</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schools.map(row => (
                <TableRow onClick={ () => handleOpen(row.students, row.id) } key={row.id} className={classes.pointer}>
                  <TableCell component="th" scope="row">
                    {row.schoolName}
                  </TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>

      <div className="split right">
        <StudentTable students={currentStudents} setStudents={setStudents} id={id} />
       </div>
    </div>
  );
}

export default SchoolTable