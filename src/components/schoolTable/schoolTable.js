
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StudentTable from "../studentsTable/studentTable";
import DeleteModal from '../deleteModal/index';
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

const SchoolTable = ({ schools, currentStudents, setCurrentStudents, setStudents, onDeleted }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
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
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schools.map(row => (
                <TableRow>
                {deleteModalOpen && (<DeleteModal onDeleted={onDeleted} setDeleteModalOpen={setDeleteModalOpen} row={row}/>)}
                  <TableCell component="th" scope="row"
                    onClick={ () => handleOpen(row.students, row.id) } key={row.id} className={classes.pointer}>
                  {row.schoolName}
                  </TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
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
      </div>

      <div className="split right">
        <StudentTable students={currentStudents} setStudents={setStudents} id={id} />
       </div>
    </div>
  );
}

export default SchoolTable