import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const NumberContainer = (props) => {
    return (
        <View {...props} style={{...styles.container, ...props.style}}>
            <Text style={{...styles.number, ...props.style}}>
                {props.children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        borderRadius: 10
    },
    number: {
        fontSize: 30,
        padding: 10,
        borderRadius: 10
    }
});

export default NumberContainer;