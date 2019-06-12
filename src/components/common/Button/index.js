import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

const Button = ({ onPress, label }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={onPress}>
                <Text style={styles.touchableTextStyle}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export { Button };
