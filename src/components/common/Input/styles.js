import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        borderWidth: 1,
        borderColor: '#00aee6',
        width: '100%',
        height: 40
    },
    containerStyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    textStyle: {
       fontSize: 18
    },
    textStyleContainer: {
        flexDirection: 'row'
    },
    inputStyleContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    validationText: {
        paddingTop: 10,
        color: 'red'
    },
    warningText: {
        paddingTop: 10,
        color: '#FFFF00'
    }
});
