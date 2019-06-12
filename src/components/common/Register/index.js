import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { Input, Button, Header } from '../../common';
import validate from './validate';
import styles from './styles';

class RegisterForm extends Component {
    //Meta as a props 
    renderField = ({ label, keyboardType, meta, input, secureTextEntry }) => {
        return (
            <Input 
                label={label}
                keyboardType={keyboardType} 
                meta={meta} 
                input={input}
                secureTextEntry={secureTextEntry}
            />
        );
    };

     //Helper function 
     renderButton = () => {
        if (this.props.isLoading) return <ActivityIndicator size="large" />;

        return <Button label="Register" onPress={this.props.handleSubmit(this.props.submitForm)} />;
    }

    render() {
       return (
        <View style={styles.container}>
            <ScrollView>
                <Header headerText="Welcome to Dog Register !" />
                <Field 
                    keyboardType="email-address" 
                    label="Email" 
                    name="email" 
                    component={this.renderField} 
                />
                <Field 
                    keyboardType="default" 
                    label="Password" 
                    name="password" 
                    component={this.renderField}
                    secureTextEntry
                />
                <Field 
                    keyboardType="default" 
                    label="Confirm Password" 
                    name="confirm_password" 
                    component={this.renderField}
                    secureTextEntry
                />

                <View style={styles.ButtonStyle}>
                        <Text>{this.props.message}</Text>
                        <View style={styles.buttonContainer}>
                            {this.renderButton()}
                        </View>
                    </View>
            </ScrollView>
        </View>

        );
    }
}

//Todo correct name
const Register = reduxForm({
    form: 'login', // a unique identifier for this form
    validate
})(RegisterForm);

export { Register };
