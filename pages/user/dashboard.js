import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Copyright from '../../src/Copyright';
import TemplateDefault from '../../src/templates/Default';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: spacing(8, 0, 6),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="xl" ClassName={classes.container}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bem vindo ao OLXIS
          </Typography>
          <Copyright />
        </Container>
      </TemplateDefault>
    </>
  );
}
