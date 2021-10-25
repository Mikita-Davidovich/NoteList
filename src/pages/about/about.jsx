import React from 'react';
import { Box } from '@material-ui/core';

import Layout from 'shared/Layout';

import { StyledBox, Description, Headers } from './styled';

const About = () => (
  <Layout>
    <StyledBox>
      <Box>
        <Headers>Possibilities</Headers>
        <Description>You will never forget about your business because you can use this site with the ability to save, create and delete notes.</Description>
      </Box>
      <Box>
        <Headers>Functionality</Headers>
        <Description>You can easily create your own note with title and description</Description>
        <Description>You can edit your already created note</Description>
        <Description>You can add a new note</Description>
        <Description>You can delete an existing one</Description>
        <Description>You can also go through a simple registration and watch the notes of other people</Description>
      </Box>
      <Box>
        <Headers>How the project can be developed:</Headers>
        <Description>Add functionality to share your notes on social networks.</Description>
        <Description>Add the ability to select a frame for a note</Description>
        <Description>Add the ability to create your own,with unique frame design</Description>
      </Box>
    </StyledBox>
  </Layout>
);

export default About;
