import React, { Component } from 'react';
import firebase from 'firebase';
import { View, ActivityIndicator } from 'react-native';
import { Navigation, NavSearch } from '../../components/common';
//import styles from './styles';

class Root extends Component {
    state = {
        loggedIn: null
    }
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDbRrrGpYC9DSwkFXVkQXOwdo1cTBOs72s',
            authDomain: 'dog-app-a0cb1.firebaseapp.com',
            databaseURL: 'https://dog-app-a0cb1.firebaseio.com',
            projectId: 'dog-app-a0cb1',
            storageBucket: 'dog-app-a0cb1.appspot.com',
            messagingSenderId: '847216615619'
    
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
      });
    }

    //which navigator will display
   renderContent = () => {
       //console.log(this.state.loggedIn);
        switch (this.state.loggedIn) {
            case true:
                return (
                    <NavSearch />
                );
            case false:
                return <Navigation />;
            default:
                return <ActivityIndicator size="large" />;
        }
    }
    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                { this.renderContent() }
            </View>
        );
    }
}

export default Root;
