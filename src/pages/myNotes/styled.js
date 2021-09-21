import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  note: {
    border: '1px solid black',
    marginBottom: '20px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    cursor: 'pointer',
    padding: '20px',
    transition: '1s',
    backgroundColor: '#97a19f',
    color: '#FFFF',
  },
  activeNote: {
    border: '1px solid #00258a',
    marginBottom: '20px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    cursor: 'pointer',
    color: '#00258a',
    padding: '20px',
    transition: '1s',
    boxShadow: '0px 4px 6px rgb(26 46 53 / 40%)',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  app: {
    backgroundColor: '#00FA9A',
  },
  noteText: {
    border: '1px solid black',
    height: '100%',
    borderRadius: '20px',
    padding: '30px',
    width: '50%',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  icons: {
    cursor: 'pointer',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputTitle: {
    margin: '20px 0',
  },
  buttonsEditDelete: {
    margin: '10px 0',
    width: '100px',
  },
  buttonsUpdateExit: {
    margin: '20px 20px 0 0',
  },
});

export default useStyles;
