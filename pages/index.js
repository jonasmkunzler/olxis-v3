import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxwidth="xl">
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          INDEX
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br />
        <Link href="/user/dashboard" color="secondary">
          Go to Dashboard
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
