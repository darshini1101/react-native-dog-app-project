import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 10
    },
    content: {
        width: 350,
        height: 580,
        borderBottomColor: '#f26539',
        borderBottomWidth: 4,
        backgroundColor: '#f1f2f2'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    backgroundContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        padding: 10
    }
});
