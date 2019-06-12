import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class Touchable extends Component {
    render() {
        return (
            <View style={styles.articleStyle}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.opacityStyle}>
                   <Text style={styles.articleText}>{this.props.children}</Text> 
                </TouchableOpacity>
            </View>
        );
    }
}
 
export { Touchable };
