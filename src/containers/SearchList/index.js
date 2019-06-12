import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Dimensions, Text } from 'react-native';
import { DogList, ModalView, Touchable } from '../../components/common';
import FilterSearch from '../../components/common/FilterSearch';
import styles from './styles';
import { 
    searchSubmitted, 
    showImageFullscreen, 
    closeImageFullscreen, 
    wikiSearch,
    wikiArticleSubmitted,
    searchOnFocused
} from '../../actions';

class SearchList extends Component {
    //Helper function
    showModal = () => {
        this.props.navigation.navigate('LookupPopup');
    }

    fetchImages = (event) => {
        event.persist();
        this.props.searchSubmitted(event.nativeEvent.text);
        this.props.wikiSearch(event.nativeEvent.text);
    }

    //Helper function
    showImageFullscreen = (url) => {
        this.props.showImageFullscreen(url);
    }

    closeImageFullscreen = () => {
        this.props.closeImageFullscreen();
    }

    wikiArticleSubmitted = (item) => {
        this.props.wikiArticleSubmitted(item);
        this.props.navigation.navigate('Wiki', {
            title: item.displaytitle
        });
    }

    //To Reset the data 
    resetDataBreed = () => {
        this.props.searchOnFocused();
    }
    
   renderImageList = item => {
        return (
            <Touchable onPress={() => this.showImageFullscreen(item.image)}>
                <Image style={styles.imageStyle} resizeMode="cover" source={{ uri: item.image }} />
            </Touchable>
        );
    }

    renderWikiList = item => {
        return (
            <Touchable onPress={() => this.wikiArticleSubmitted(item)}>
                <Text style={styles.text}>{item.displaytitle}</Text>
            </Touchable>
        );
    }


    renderFullscreenImage = () => {
        if (this.props.selected !== '') {
            return (
                <ModalView onDismiss={this.closeImageFullscreen} >
                    <Image 
                        style={{ 
                            width: Dimensions.get('window').width, 
                            height: '100%'
                        }} 
                        source={{ uri: this.props.selected }}
                        resizeMode="contain"
                    />
                </ModalView>
            );
        }
        //need to add a loader
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FilterSearch 
                        showModal={this.showModal} 
                        fetchImages={this.fetchImages}
                        resetDataBreed={this.resetDataBreed} 
                    />
                </View>
                <View style={styles.listImage}>
                    <DogList
                        horizontal
                        data={this.props.searchResult} 
                        renderItem={this.renderImageList}
                    />
                </View>  
                <View style={styles.listWiki}>
                    <DogList 
                        horizontal={false}
                        data={this.props.wiki.pages}
                        renderItem={this.renderWikiList}
                    />
                </View>  
                {this.renderFullscreenImage()}
            </View>

                 
        );
    }
}

const mapStateToProps = state => {
    return {
        searchResult: state.app.searchResult,
        message: state.app.message,
        wiki: state.app.wiki,
        item: state.app.item,
        selected: state.app.selected,
        breed: state.app.breed
    };
};

//Connect Componet with redux
export default connect(mapStateToProps, { 
    searchSubmitted, 
    showImageFullscreen, 
    closeImageFullscreen, 
    wikiSearch,
    wikiArticleSubmitted,
    searchOnFocused
 })(SearchList);

