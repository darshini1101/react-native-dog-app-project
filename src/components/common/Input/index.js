import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

const Input = ({
    onEndEditing,
    placeholder, 
    secureTextEntry, 
    autoCapitalize = 'none', 
    keyboardType, 
    label,
    meta: { touched, error, warning },
    input: { onChange, ...restInput }
}) => {
    const { 
        inputStyle, 
        containerStyle, 
        textStyle, 
        textStyleContainer, 
        inputStyleContainer,
        validationText,
        warningText
    } = styles;

    return (
        <View style={containerStyle}>
            
            <View style={textStyleContainer}>
                <Text style={textStyle}>{label}</Text>
            </View>
            
            <View style={inputStyleContainer}>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    onEndEditing={onEndEditing}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    onChangeText={onChange}
                    {...restInput}
                />
            </View>

            {touched && ((error && <Text style={validationText}>{error}</Text>) 
            || (warning && <Text style={warningText}>{warning}</Text>))}
        </View>
    );
};

export { Input };
