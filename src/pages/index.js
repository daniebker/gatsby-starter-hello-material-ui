import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import BasicTypography from '../Components/Typography/BasicTypography';
import BasicTable from '../Components/Table/BasicTable';

export default function Home () {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Typography variant='h2'>Typography</Typography>
        <BasicTypography />

        <Typography variant='h2'>Basic Table</Typography>
        <BasicTable />
      </Container>
    </Box>
  );
}
