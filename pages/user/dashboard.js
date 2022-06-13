import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Copyright from '../../src/Copyright';
import TemplateDefault from '../../src/templates/Default';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  container: {
    padding: '2em 0em 4em',
  },
  buttonAdd: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="xl" className={classes.container}>
          <Typography variant="h4" component="h1" align="center">
            Bem vindo ao OLXIS
          </Typography>
          <Box>
            <Button variant="contained" className={classes.buttonAdd}>
              Novo Anúncio
            </Button>
          </Box>
          <Copyright />
        </Container>
        <Container maxWigth="md">
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
            
            </Grid> 
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  );
}
