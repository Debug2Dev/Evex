import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withTranslation } from '../i18n'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LaunchIcon from '@material-ui/icons/Launch';
import GamesIcon from '@material-ui/icons/Games';
import { deepOrange } from '@material-ui/core/colors';
import { Avatar, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  square: {
    color: '#fff',
    backgroundColor: deepOrange[500],
    borderRadios: '5px',
    float: 'left'
  },
  image: {
    width: 128,
    height: 128,
  },
  imgCont: {
    float: 'left'
  },
  imgText: {
    display: 'block',
    left: '10px',
    position: 'relative'
  },
  cellWidth: {
    width: '200px'
  }
}));

const TableDetails = (props) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const { t } = props;
  const { responseObject } = props.config.config;
  const images = ((responseObject || {}).venue || {}).images || [];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right"><LaunchIcon /></TableCell>
              <TableCell align="right"><GamesIcon /></TableCell>
              <TableCell align="right"><LaunchIcon /></TableCell>
              <TableCell align="right"><GamesIcon /></TableCell>
              <TableCell align="right"><LaunchIcon /></TableCell>
              <TableCell align="right"><GamesIcon /></TableCell>
              <TableCell align="right"><LaunchIcon /></TableCell>
              <TableCell align="right"><GamesIcon /></TableCell>
              <TableCell align="right"><LaunchIcon /></TableCell>
              <TableCell align="right"><GamesIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('meetingRoom')}</TableCell>
              <TableCell align="right">{t('roomSize')}</TableCell>
              <TableCell align="right">{t('ceilingHeight')}</TableCell>
              <TableCell align="right">{t('roomDimentions')}</TableCell>
              <TableCell align="right">{t('maximumCapacity')}</TableCell>
              <TableCell align="right">{t('uShape')}</TableCell>
              <TableCell align="right">{t('banquetRounds')}</TableCell>
              <TableCell align="right">{t('cocktailRounds')}</TableCell>
              <TableCell align="right">{t('theater')}</TableCell>
              <TableCell align="right">{t('classRoom')}</TableCell>
              <TableCell align="right">{t('boardRoom')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {images.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" className={classes.cellWidth}>
                  <Avatar variant="square" className={classes.square}>
                    <img src={row.image_location} className={classes.image}/>
                  </Avatar>
                  <Box component="div" className={classes.imgCont} display={{ xs: 'none', md: 'none', lg: 'block' }}>
                    <Typography variant="caption" className={classes.imgText}>{row.image_category}</Typography>
                    <Typography variant="caption" color="primary" className={classes.imgText}>{t('viewDetails')}</Typography>
                  </Box>
                  
                </TableCell>
                <TableCell align="right">{row.file_size} {t('sqUnit')}</TableCell>
                <TableCell align="right">15 ft.</TableCell>
                <TableCell align="right">{row.name.split("-")[0]}</TableCell>
                <TableCell align="right">{row.width}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.file_size}</TableCell>
                <TableCell align="right">{row.width}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.file_size}</TableCell>
                <TableCell align="right">{row.width}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => {
  return { config: state }
}

TableDetails.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(connect(mapStateToProps, null)(TableDetails))
