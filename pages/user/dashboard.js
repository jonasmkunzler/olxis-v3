import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Copyright from '../../src/Copyright';
import TemplateDefault from '../../src/templates/Default';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

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

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : '#fff',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

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
          <div style={{ width: '100%' }}>
            <Box
              sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </Box>
          </div>
          <Copyright />
        </Container>
        <Container maxWigth="md">
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <h1>G</h1>
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  );
}
