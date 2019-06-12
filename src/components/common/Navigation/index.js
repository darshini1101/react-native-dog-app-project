import { createStackNavigator } from 'react-navigation';
import HorizontalScrollView from '../../../containers/HorizontalScrollView';
import Login from '../../../containers/Login';
import Register from '../../../containers/Register';

const nav = {
    mode: 'screen',
    headerMode: 'screen',
    cardStyle: {
        background: 'red',
        margin: 0
    }
};
const Navigation = createStackNavigator({
    Welcome: {
        screen: HorizontalScrollView,
        navigationOptions: {
            headerTitle: 'Home',
            headerTitleStyle: { color: '#00aee6' },
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
            headerTitleStyle: { color: '#00aee6' }
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTitle: 'Register',
            headerTitleStyle: { color: '#00aee6' }
        }
    }
}, nav);

export { Navigation };
