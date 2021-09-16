import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: '10px 0',
      },
    },
    MuiFormControl: {
      root: {
        margin: '20px 0',
      },
    },
  },
});
