import { BrowserRouter as Router, Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Bugs from "./components/bugs/Bugs"
// import Menu from "./components/Menu"
import Topbar from "./components/layout/Topbar"
import Sidebar from "./components/layout/Sidebar"

const useStyles = makeStyles((theme: Theme) =>
  // TODO check if it is necessary for the layout to display: flex on everything
  createStyles({
    root: {
      display: 'flex',
    },
    // necessary for content to be below top bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(8),
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>  
        <CssBaseline />
        <Topbar></Topbar>
        <Sidebar></Sidebar>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Bugs></Bugs>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
