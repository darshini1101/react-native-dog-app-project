import React from 'react';
import { View, WebView } from 'react-native';
import styles from './styles';

const Web = ({ source }) => {
    return (
        <View style={styles.webContainer}>
            <WebView 
                source={{ uri: source }} 
            />
        </View>
    );
};

export { Web };
