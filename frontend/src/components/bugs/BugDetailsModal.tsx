import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IBug } from "../../interfaces/IBug"
import BugDetailsForm from "./BugDetailsForm"

interface Props {
    bugDetailsModalOpen: boolean, // Prop that determines if the modal is open or not
    handleBugDetailsModalClose: (event: React.MouseEvent<HTMLButtonElement>) => void, // Prop to set the state of the modal in the parent onClose
    clickedBug: IBug,
    updateBug: Function,
    deleteBug: Function
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BugDetailsModal({ bugDetailsModalOpen, handleBugDetailsModalClose, clickedBug, updateBug, deleteBug }: Props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Details</h2>
      <BugDetailsForm clickedBug={clickedBug} updateBug={updateBug} deleteBug={deleteBug}></BugDetailsForm>
    </div>
  );

  return (
    <div>
      <Modal
        open={bugDetailsModalOpen}
        onClose={handleBugDetailsModalClose}
        aria-labelledby="simple-modal-title"
      >
        {body}
      </Modal>
    </div>
  );
}