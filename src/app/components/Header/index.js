import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Login from './Auth/Login';
import Register from './Auth/Register';
import FormDialog from './Auth/Dilog';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  small: {
      fontSize: 15,
  }
};

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                auth: false,
                email: null,
                name: null
            },
            anchorEl: null,
            loginActive: false,
            registerActive: false
          };
        //this.dialog = React.createRef();
        //this.loginDialog = React.createRef();
        this.register = () => {
            this.setState({ ... this.state, ... { registerActive: true } });
        };
        
        this.handleMenu = event => {
            this.setState({ anchorEl: event.currentTarget });
          };
        
        this.handleClose = () => {
            this.setState({ anchorEl: null });
          };

        this.setLogReg = (value) => { return (e) => {
            e.preventDefault();
            this.setState({
                loginActive: value === 'login',
                registerActive: value === 'register',
                anchorEl: null
            });
            setTimeout(() => {console.dir(this.state)});
        };
        };

        this.resetLoginRegister = () => {
            this.setState({
                loginActive: false,
                registerActive: false,
                anchorEl: null
            });
        };
    }
  render() {
    const { classes } = this.props;
    const { user, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { loginActive, registerActive } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Catalog
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.small}>
                {user.name || user.email}
            </Typography>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                {!user.auth && (
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.setLogReg('login')}>Login</MenuItem>
                        <MenuItem onClick={this.setLogReg('register')}>Rigister</MenuItem>
                    </Menu>
                  )}
                  {user.auth && (
                      <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          open={open}
                          onClose={this.handleClose}
                      >
                        <MenuItem onClick={this.resetLoginRegister}>Profile</MenuItem>
                        <MenuItem onClick={this.resetLoginRegister}>Logout</MenuItem>
                      </Menu>
                  )}
              </div>
          </Toolbar>
        </AppBar>
              <Login loginActive={this.state.loginActive}/>

              <FormDialog
                closeForm={this.resetLoginRegister}
              />

          {registerActive && (
              <Register closeForm={this.resetLoginRegister}/>
          )}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
