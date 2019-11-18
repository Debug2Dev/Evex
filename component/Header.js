import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withTranslation, i18n } from '../i18n'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = ({t}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title} color="primary">
            {t('appName')}
          </Typography>
          <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')} color="inherit">{t('change-locale')}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withTranslation('common')(Header);
