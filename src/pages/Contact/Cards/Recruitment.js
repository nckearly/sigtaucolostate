/* eslint-disable react/prop-types */
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, withTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../../components/Typography';

const styles = theme => ({
  cardMargin: {
    margin: theme.spacing.unit * 3,
  },
  card: {
    display: 'inline-block',
    width: '17%',
    minWidth: 325,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  name: {
    fontSize: 19,
    marginBottom: 12,
  },
  easteregg: {
    display: 'flex',
    
  },
  easter: {
    display: 'inline-block',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
    
  },
  contact: {
    display: 'flex',
    margin: theme.spacing.unit * 1,
  },
  contactText: {
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
  },
  contactEmail: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
    '&:hover': {
      cursor: 'pointer',
      borderBottom: `solid 2px ${theme.palette.secondary.main}`,
    },
  },
  contactTel: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
    '&:hover': {
      cursor: 'pointer',
      borderBottom: `solid 2px ${theme.palette.secondary.main}`,
    },
  },
});

function EducationCard(props) {
  const { classes, disableMargins } = props;

  return (
    <Card
      className={classNames(
        classes.card,
        !disableMargins && classes.cardMargin,
      )}
    >
      <CardContent>
        <Typography
          className={classes.title}
          align="left"
          variant="h5"
          marked="left"
        >
          Director of Recruitment
        </Typography>
        <div className={classes.easteregg}>

        <Typography className={classes.name}>Christo Erker</Typography>
        <Typography className={classes.easter}>Expert Dragon Slayer</Typography>
        </div>
        <Typography className={classes.contact}>
          <MailIcon />
          <a
            className={classes.contactEmail}
            href="mailto:Christo.a.erker@gmail.com"
          >
            Christo.a.erker@gmail.com
          </a>
        </Typography>
        <Typography className={classes.contact}>
          <PhoneIcon />
          <a className={classes.contactTel} href="tel:7208105410">
            (720) 810-5410
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}

EducationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationCard);
