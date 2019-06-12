import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
//import { connect } from 'react-redux';
import styles from './styles';
//import { articlesSelected } from '../../../actions';

class DogList extends Component {  
    render() {
        return (
            <View style={styles.articleContainer}>
                <FlatList 
                    data={this.props.data}
                    renderItem={({ item }) => this.props.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={this.props.horizontal}
                />
            </View>
           
        );
    }
}

export { DogList };

