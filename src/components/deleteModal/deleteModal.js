import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteModal = ({row, onDeleted, setDeleteModalOpen}) =>  {
  const [open, setOpen] = React.useState(false);

  const onCancel = () => {
    setDeleteModalOpen(false);
  };

  const handleClose = () => {
    onDeleted(row.id)
    setDeleteModalOpen(false);
  };

  return (
    <div>
      <Dialog
        open={setDeleteModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default DeleteModal;