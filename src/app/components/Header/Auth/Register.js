import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

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


class Register extends React.Component{
    constructor(props) {
        super(props);
        this.formClose = this.formClose.bind(this);
        this.submitForm = () => event => {
            event.preventDefault();
            console.dir(this.state);
        };
        this.state = {
            email: '',
            password: '',
            cassword: ''
        };
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.cPasswordChange = this.cPasswordChange.bind(this);
    }
    emailChange(event) {
        this.setState({email: event.target.value});
    }
    passwordChange(event) {
        this.setState({password: event.target.value});
    }
    cPasswordChange(event) {
        this.setState({cassword: event.target.value});
    }
    formClose(event) {
        event.preventDefault();
        this.props.closeForm();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <form onSubmit={this.submitForm()} className={classes.container}>
                    <TextField
                        id="standard-email"
                        label="Email*"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.emailChange}
                        type="email"
                        margin="normal"
                    />
                    <TextField
                        id="standard-password"
                        label="Password*"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.passwordChange}
                        type="password"
                        margin="normal"
                    />
                    <TextField
                        id="confirm-password"
                        label="Confirm password*"
                        className={classes.textField}
                        value={this.state.cassword}
                        onChange={this.cPasswordChange}
                        type="password"
                        margin="normal"
                    />
                    <div className={classes.buttonBlock}>
                        <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                type="submit">
                            Register
                        </Button>
                        <Button variant="contained"
                                color="default"
                                className={classes.button}
                                onClick={this.formClose}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
