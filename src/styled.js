import { makeStyles } from '@material-ui/core';
import aboutBackGround from './assets/images/aboutBackGround.jpg';

const useStyles = makeStyles({
  note: {
    border: '1px solid black',
    margin: '0 20px 20px 10px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '20px',
    transition: '1s',
    color: '#000',
    borderRadius: '20px',
    backgroundColor: '#b3ece9',
  },
  activeNote: {
    border: '1px solid #00258a',
    margin: '0 20px 20px 10px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    color: '#fff',
    padding: '20px',
    transition: '1s',
    boxShadow: '0px 4px 6px rgb(26 46 53 / 40%)',
    borderRadius: '20px',
    backgroundColor: '#000',

  },
  title: {
    fontWeight: 'bold',
    wordWrap: 'break-word',
    width: '300px',
    margin: '0',
  },
  description: {
    wordWrap: 'break-word',
    width: '300px',
  },
  date: {
    fontSize: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '100px',
  },
  app: {
    backgroundColor: '#00FA9A',
  },
  noteText: {
    marginRight: '30px',
  },
  noteTextEditPanel: {
    border: '1px solid black',
    padding: '25px',
    borderRadius: '20px',
    display: 'flex',
  },
  iconContainer: {
    display: 'flex',
  },
  icons: {
    cursor: 'pointer',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    marginTop: '20px',
    padding: '20px',
    borderRadius: '20px',
  },
  inputTitle: {
    margin: '20px 0',
  },
  buttonsEditDelete: {
    height: '30px',
  },
  buttonsUpdateExit: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    '&:hover': {
      color: '#fff',
    },
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: '#3AAFA9',
    minHeight: '100vh',
  },
  homeLink: {
    textDecoration: 'none',
    fontSize: '30px',
    color: '#000',
  },
  aboutWapper: {
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${aboutBackGround})`,
    backgroundSize: 'cover',
  },
  aboutHeaders: {
    margin: '0',
    paddingTop: '20px',
    color: '#FFFF00',
  },
  aboutDescription: {
    color: '#fff',
  },
});

export default useStyles;
