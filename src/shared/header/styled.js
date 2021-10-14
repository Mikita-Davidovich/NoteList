import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const BurgerMenuButton = styled(IconButton)({
  display: 'none !important',
  '@media (max-width: 780px)': {
    display: 'block !important',
  },
});
