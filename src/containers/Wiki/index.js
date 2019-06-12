import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import { Button, Web } from '../../components/common'; 

class Wiki extends Component {
    
    state = {
        webViewVisible: false
    }

    showWebView = () => {
        this.setState({
            webViewVisible: true
        });
    };

    fetchImage = () => {
        let imageURL = require('../../images/dog.gif');

        if (typeof this.props.item.originalimage !== 'undefined') {
            imageURL = {
                uri: this.props.item.originalimage.source
            };
        }

        return imageURL;
    }

    renderContent = () => {
        if (this.state.webViewVisible) {
            return (
                <Web source={this.props.item.content_urls.mobile.page} />
            );
        }

        return (
            <View style={styles.content}>
                <ImageBackground style={styles.backgroundImage} source={this.fetchImage()}>
                    <View style={styles.backgroundContent} />
                  
                </ImageBackground>
                <View style={styles.description}>
                    <Text>{this.props.item.extract}</Text>
                    <Button label={this.props.item.displaytitle} onPress={this.showWebView} />

                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.app.item
    };
};

export default connect(mapStateToProps, null)(Wiki);
