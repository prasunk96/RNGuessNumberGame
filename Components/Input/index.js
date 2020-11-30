import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

const Input = (props) => {
    return <TextInput {...props} style={{ ...style.input, ...props.customStyle }} />
};

const style = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
    }
});

export default Input;