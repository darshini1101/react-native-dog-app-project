import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import { Input, Button } from '../../common';
import validate from './validate';
import styles from './styles';
import { searchSubmitted, wikiSearch } from '../../../actions';

class SearchList extends Component {

    componentDidUpdate() {
        if (this.props.breed !== '') {
            this.props.dispatch(change('search', 'name', this.props.breed));
            this.props.searchSubmitted(this.props.breed);
            this.props.wikiSearch(this.props.breed);
        }
    }

    //Meta as a props 
    renderField = ({ label, keyboardType, meta, input, secureTextEntry }) => {
        return (
            <Input 
                label={label}
                keyboardType={keyboardType} 
                meta={meta} 
                input={input}
                secureTextEntry={secureTextEntry}
                onEndEditing={this.props.fetchImages}
            />
        );
    };

    render() {
       return (
        <View style={styles.container}>
            <View style={styles.inputStyle}>
                <Field 
                    keyboardType="default" 
                    label="Enter Dog Name" 
                    name="name" 
                    component={this.renderField}
                    onFocus={this.props.resetDataBreed}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button label="Lookup" onPress={this.props.showModal} />
            </View> 
        </View>

        );
    }
}

//Todo correct name
const FilterSearch = reduxForm({
    form: 'search', // a unique identifier for this form
    validate
})(SearchList);

const mapStateToProps = state => {
    return {
        breed: state.app.breed
    };
};
export default connect(mapStateToProps, { searchSubmitted, wikiSearch })(FilterSearch);

