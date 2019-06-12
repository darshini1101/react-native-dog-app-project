//Import react Library and view
import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from '../../components/common';

import styles from './styles';

class HorizontalScrollView extends Component {
    render() {
        const screenWidth = Dimensions.get('window').width;
        //const screenHeight = Dimensions.get('window').Height;
        return (
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                    <ScrollView horizontal pagingEnabled>
                        <View style={{ ...styles.containerScreenOne, width: screenWidth }}>
                            <Image source={require('../../images/dog.gif')} style={[styles.image, { width: '60%', height: '60%' }]} />
                            <Text style={styles.textTitle}>My Name: Bella</Text>
                            <Text style={styles.styleText}>Finnish Spitz were originally were bred to hunt a variety of small and large game,
                                and then bark when they found something.
                                Today they’re considered “talkative” companions who will 
                                keep you apprised of just about everything going on in your surroundings.
                            </Text>
                        </View>
                        <View style={{ ...styles.containerScreenTwo, width: screenWidth }}>
                        <Image source={require('../../images/dog_2.gif')} style={[styles.image, { width: '50%', height: '60%' }]} />
                            <Text style={styles.textTitle}>My Name: Princess</Text>
                            <Text style={styles.styleText}>Canines in the Affenpinscher dog breed were originally created to be ratters in homes, 
                                stables, and shops. Bred down in size, they moved up in the world, 
                                becoming ladies’ companions. Today, they are happy, mischievous companion dogs.
                            </Text>
                        </View>
                        <View style={{ ...styles.containerScreenTwo, width: screenWidth, backgroundColor: '#005a90' }}>
                        <Image source={require('../../images/dog_3.gif')} style={[styles.image, { width: '90%', height: '65%' }]} />
                            <Text style={styles.textTitle}>My Name: Kiki</Text>
                            <Text style={styles.styleText}>The Chihuahua dog breed‘s charms include his small size, 
                                outsize personality, and variety in coat types and colors. 
                                He loves nothing more than being with his people and requires a minimum of grooming and exercise.
                            </Text>
                        </View>
                    </ScrollView>
                </View>

            
                <View style={styles.StylesBottom}>
                    <View style={{ flex: 5 }}>
                        <Button label="Login" onPress={() => this.props.navigation.navigate('Login')} />
                    </View>

                    <View style={{ flex: 5 }}>
                        <Button label="Register" onPress={() => this.props.navigation.navigate('Register')} />
                    </View>

                </View>
            </View>
        );
    }
}

export default HorizontalScrollView;
