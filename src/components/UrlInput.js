import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { isUrlValid, getProtocol } from '../util';
import { encodeUrl } from '../encode';

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
    valid: false,
    encoded: ''
  };

  handleChange = event => {
    const urlToEncode = event.target.value;
    if(isUrlValid(urlToEncode)) {
      const host = window.location.host;
      const protocol = getProtocol(urlToEncode);
      const encoded = `${protocol}${host}/${encodeUrl(urlToEncode)}`;
      this.setState({
        url: event.target.value,
        encoded
      });
    } else {
      this.setState({
        url: event.target.value,
        encoded: ''
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { url, encoded } = this.state;
    const expanded = encoded.length > 0;
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
                {encoded}
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
