import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IBug } from "../../interfaces/IBug"

interface Props {
  bugs: Array<IBug>,
  openBugDetailsModal: Function
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BugTable({ bugs, openBugDetailsModal }: Props) {
  const classes = useStyles();

  const handleCellClick = (id: number) => {
    openBugDetailsModal(id);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bugs.map((bug) => (
            <TableRow key={bug.id} onClick={() => handleCellClick(bug.id)}>
              <TableCell component="th" scope="row">
                {bug.name}
              </TableCell>
              <TableCell align="right">{bug.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}