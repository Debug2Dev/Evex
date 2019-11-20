import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withTranslation } from "../i18n";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 190,
    width: "100%"
  },
  firstDiv: {
    height: 400,
    width: "100%",
    marginBottom: "15px"
  },
  control: {
    padding: theme.spacing(8)
  },
  spacingTop: {
    paddingTop: '15px'
  }
}));

const ComponentIndexPage = props => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const { responseObject } = props.config.config;
  const images = (((responseObject || {}).venue || {}).images || []);

  return (
    <Grid item className={classes.spacingTop}>
      <Grid container spacing={spacing}>
        <Grid className={classes.firstDiv} lg={6} md={12} xs={12} item>
          <CardMedia
            image={(images[0] || {}).image_location} className={classes.firstDiv}
          />
        </Grid>
        <Grid lg={6} md={12} xs={12} item>
          <Grid item lg={12} md={12} xs={12}>
            <Grid container spacing={spacing}>
              {
                images.slice(1, 5).map((a, key) => (
                  <Grid key={a.id} lg={6} md={6} xs={12} item>
                    <CardMedia
                      image={a.image_location} className={classes.paper}
                    />
                  </Grid>
                )
                )
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { config: state };
};

ComponentIndexPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(
  connect(mapStateToProps, null)(ComponentIndexPage)
);