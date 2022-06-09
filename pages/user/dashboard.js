import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Copyright from '../../src/Copyright';
import TemplateDefault from '../../src/templates/Default';

export default function Dashboard() {
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="xl">
          <Typography variant="h4" component="h1" gutterBottom>
            Bem vindo ao OLXIS
          </Typography>
          <Copyright />
        </Container>
      </TemplateDefault>
    </>
  );
}
