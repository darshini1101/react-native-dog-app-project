//Import react Library and view
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../components/common';
import { loginSubmitted } from '../../actions';

//import styles from './styles';

class LoginForm extends Component {
    // Where submit being a function expecting values as a parameter
   //Call Action Creator and dispatch action loginSubmitted
    submitForm = values => {
        this.props.loginSubmitted(values);
    };

    render() {
        return (
            <Login submitForm={this.submitForm} isLoading={this.props.isLoading} message={this.props.error} />
        );
    }
}


//Maps state to  as props
const mapStateToProps = state => {
    return {
        user: state.app.user,
        error: state.app.error,
        isLoading: state.app.isLoading
    };
};

//Connect Componet with redux
export default connect(mapStateToProps, { loginSubmitted })(LoginForm);
