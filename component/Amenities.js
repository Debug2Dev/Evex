import React, { useEffect, Fragment } from 'react';
import { withTranslation } from '../i18n'
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import data from  '../lib/data.json'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(8),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Amenities = (props) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const { t } = props;
  return (
    <div>
      <Grid container item xs={12} spacing={spacing}>
        <Grid xs={12} item>
            <Typography variant="h6" gutterBottom>{t('amenities')}</Typography>
        </Grid>
        <Grid container item xs={12} spacing={spacing}>
          <Grid xs={3} item>
              <Typography variant="subtitle2" gutterBottom>{t('roomFeature')}</Typography>
              {data.map((a) => (
                <Typography variant="body2" gutterBottom>{a.name}</Typography>
              ))}
          </Grid>
          <Grid xs={3} item>
              <Typography variant="subtitle2" gutterBottom>{t('facilities')}</Typography>
              {data.map((a) => (
                <Typography variant="body2" gutterBottom>{a.name}</Typography>
              ))}
          </Grid>
          <Grid xs={3} item>
              <Typography variant="subtitle2" gutterBottom>{t('busService')}</Typography>
              {data.map((a) => (
                <Typography variant="body2" gutterBottom>{a.name}</Typography>
              ))}
          </Grid>
          <Grid xs={3} item>
              <Typography variant="subtitle2" gutterBottom>{t('venueAccessibility')}</Typography>
              {data.map((a) => (
                <Typography variant="body2" gutterBottom>{a.name}</Typography>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default withTranslation('common')(Amenities);