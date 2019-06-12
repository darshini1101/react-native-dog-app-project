//Import react Library and view
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Touchable, DogList } from '../../components/common';
import { lookupRequest, dogSelected } from '../../actions';
//import styles from './styles';

class LookupScreen extends Component {

    //Componet will mount and make the request
    componentWillMount() {
        this.props.lookupRequest();
    }

    /*showModal = (selected) => {
        this.props.articlesSelected(selected);
    }*/

    searchMore = (name) => {
        this.props.dogSelected(name);
        this.props.navigation.navigate('SearchList');
    }
    
    renderDogList = item => {
        return (
            <Touchable onPress={() => this.searchMore(item.breed)}>
                <Text>{item.breed}</Text>
            </Touchable>
        );
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <DogList
                    horizontal={false}
                    data={this.props.list} 
                    renderItem={this.renderDogList}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.app.list
    };
};

//Connect Componet with redux
export default connect(mapStateToProps, { lookupRequest, dogSelected })(LookupScreen);
