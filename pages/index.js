import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import TemplateDefault from '../src/templates/Default';

export default function Index() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 2 }}>
        <TemplateDefault>
          <Typography variant="h4" component="h1" gutterBottom>
            Bem vindo ao OLXIS
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </TemplateDefault>
      </Box>
    </Container>
  );
}
