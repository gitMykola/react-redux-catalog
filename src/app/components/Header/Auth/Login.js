import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";


const styles = theme => ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    buttonBlock: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop: 30
    },
    button: {
        margin: theme.spacing.unit,
        minWidth: 150
    },
    '@media (max-width: 360px)': {
        buttonBlock: {
            flexDirection: 'column'
        },
    },
});


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.formClose = (event) => {
            event.preventDefault();
            this.setState({open: false});
        };
        this.submitForm = () => event => {
            event.preventDefault();
            console.dir(this.state);
        };
        this.state = {
            open: false,
            email: '',
            password: ''
        };
        this.openLogin = this.openLogin.bind(this);
        this.emailChange = event => {
            this.setState({email: event.target.value});
        };
        this.passwordChange = event => {
            this.setState({password: event.target.value});
        };
    }
    openLogin() {
        this.setState({open: true});
    }
    render() {
        const { classes } = this.props;
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={this.submitForm()}
                      className={classes.container}>
                    <TextField
                        id="standard-email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.emailChange}
                        type="email"
                        margin="normal"
                        className={classes.textField}
                    />
                    <TextField
                        id="standard-password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.passwordChange}
                        type="password"
                        margin="normal"
                    />
                    <div>
                        <Button variant="contained"
                                color="default"
                                onClick={this.formClose}>
                            Cancel
                        </Button>
                        <Button variant="contained"
                                color="primary"
                                type="submit">
                            Login
                        </Button>
                    </div>
                </form>
            </Dialog>
        );
    }
}


Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
