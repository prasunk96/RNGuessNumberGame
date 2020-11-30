import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return <View {...props} style={{ ...style.card, ...props.customStyle }}>{props.children}</View>;
};

const style = StyleSheet.create({
    card: {
        justifyContent: 'center',
        elevation: 10,
        /*ios*/
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6
    }
})

export default Card;