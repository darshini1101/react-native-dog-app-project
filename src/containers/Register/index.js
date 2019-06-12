//Import react Library and view
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Register } from '../../components/common';
import { registerSubmitted } from '../../actions';
//import styles from './styles';

class RegisterForm extends Component {
    /**
     * Where submit being a function expecting values as a parameter
     * Call Action Creator and dispatch action registerSubmitted
     */
    submitForm = values => {
        this.props.registerSubmitted(values);
    };

    render() {
        return (
           <Register submitForm={this.submitForm} isLoading={this.props.isLoading} message={this.props.error} />
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
export default connect(mapStateToProps, { registerSubmitted })(RegisterForm);

