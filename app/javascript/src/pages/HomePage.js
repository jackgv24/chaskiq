import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {AnchorLink} from '../shared/RouterLink'
import bg from '../../../assets/images/welcome-icon8.png'

const styles = theme => ({
  logo: {
    background: `url(${theme.palette.primary.logo})`,
    width: '100px',
    height: '100px',
    backgroundSize: '113%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-4px -1px'
  },
  contentWrapper: {
    //margin: '40px 16px',
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    height: '100%',
    marginBottom: '0px'
  },
  title: {
    fontWeight: '900'
  }
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function HomePage({ classes } ) {

  return (
    <React.Fragment>
      <div className={classes.contentWrapper}>

        <Container maxWidth="lg">
            <Grid container spacing={2} direction={'column'}>
              <div className={classes.logo}/>
              <Typography variant={"h2"} className={classes.title}>
                Welcome to Chaskiq
              </Typography>
            </Grid>

            <Box m={4}>
              <Typography variant={"body1"}>
                Help your customers and your team
              </Typography>
            </Box>
          
            <Grid container spacing={2}>
            
              <Grid item>
                <SimpleCard 
                  title={'create application'} 
                  subTitle={'opi opi'}
                  adjective={'bla'}
                  actions={[]}>
                  <AnchorLink 
                    to={`/apps/`}>
                    {'view apps'}
                  </AnchorLink>
                </SimpleCard>
              </Grid>

              <Grid item>
                <SimpleCard 
                  title={'create application'} 
                  subTitle={'opi opi'}
                  adjective={'bla'}
                  actions={[]}>
                  <AnchorLink 
                    to={`/apps/new`}>
                    {'new app'}
                  </AnchorLink>  
                </SimpleCard>
              </Grid>

            </Grid>

        </Container>
        
      </div>
    </React.Fragment>
  );
}


function SimpleCard({
  title, 
  subTitle, 
  adjective, 
  children,
  actions
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography 
          className={classes.title} 
          color="textSecondary" 
          gutterBottom>
          {subTitle}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} 
          color="textSecondary">
          {adjective}
        </Typography>
        <Typography variant="body2" component="p">
          {children}
        </Typography>
      </CardContent>
      <CardActions>
       {/* <Button size="small">Learn More</Button>*/}
       {actions}
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)(HomePage);