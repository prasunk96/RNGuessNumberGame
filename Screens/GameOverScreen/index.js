import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../../Components/NumberContainer';
import colors from '../../constants/colors';

const GameOverScreen = (props) => {
    return <View style={styles.screen}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.winningTitle}>You Won!</Text>
        <Text style={styles.attemptsTitle}>Attempt's to guess the number</Text>
        <NumberContainer style={styles.attemptNumber}>{props.numberOfRounds}</NumberContainer>
        <Text style={styles.originalNmberTitle}>Origina Number</Text>
        <NumberContainer style={styles.numberStyle}>{props.userNumber}</NumberContainer>
        <View style={styles.button}>
            <Button color={colors.primaryBlue} title="HOME" onPress={props.handleGoToHome} />
        </View>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryGrey,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20
    },
    winningTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: colors.primaryRed,
        marginVertical: 20
    },
    button: {
        width: 200
    },
    numberStyle: {
        color: colors.primaryGrey,
        backgroundColor: colors.primaryRed,
    },
    attemptsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    originalNmberTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    attemptNumber: {
        color: colors.primaryGrey,
        backgroundColor: colors.primaryBlue,
    }
});

export default GameOverScreen;