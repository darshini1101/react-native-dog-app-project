import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = ({ headerText }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.styleText}>{headerText}</Text>
        </View>
    );
};

export { Header };
