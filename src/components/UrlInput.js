import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    marginTop: '10%',
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
});

class UrlInput extends Component {
  state = {
    url: '',
  };

  handleChange = event => {
    this.setState({
      url: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { url } = this.state;
    const expanded = url.length > 0;
    return (
      <div className={classes.root}>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={10} className={classes.paper} >
          <ExpansionPanel expanded={expanded} >
            <ExpansionPanelSummary>
              <TextField
                id="outlined-full-width"
                style={{ margin: 8 }}
                placeholder="Paste a link to compress it"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange}
                value={url}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {url}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(UrlInput);
