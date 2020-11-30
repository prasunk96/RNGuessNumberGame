import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const Header = (props) => {
    return (
        <View {...props} style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: colors.primaryBlue,
        justifyContent: "center",
        paddingTop: 36,
        alignItems:"center"
    },
    headerText: {
        color: colors.primaryGrey,
        fontSize: 20,
        fontWeight: '700'
    }
});

export default Header;
