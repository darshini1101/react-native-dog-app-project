import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import firebase from 'firebase';
import SearchList from '../../../containers/SearchList';
import LookupScreen from '../../../containers/LookupScreen';
import Wiki from '../../../containers/Wiki';

const navsearch = {
    mode: 'screen',
    headerMode: 'screen',
    cardStyle: {
        background: 'red',
        margin: 0
    }
};

const Lookup = createStackNavigator(
    {
      LookupModal: {
        screen: LookupScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

const NavSearch = createStackNavigator({
    SearchList: {
        screen: SearchList,
        navigationOptions: {
            headerTitle: 'DOG APP SEARCH LIST',
            headerTitleStyle: { color: '#00aee6' },
            headerLeft: (
                <Button 
                    onPress={() => firebase.auth().signOut()}
                    title="Logout"
                />
            )

        },
    },
    Wiki: {
        screen: Wiki
    },
    LookupPopup: {
        screen: Lookup
    }
}, navsearch);

export { NavSearch };
