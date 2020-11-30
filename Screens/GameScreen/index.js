import React, { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import NumberContainer from '../../Components/NumberContainer';
import Card from '../../Components/Card';
import colors from '../../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random()*(max-min)) + min;
    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randNum;
    }
};

const GameScreen = (props) => {
    const{ gameOverhandler, userNumber } = props;

    const [opponentGuessNumber, setGuessNumber] = useState(generateRandomBetween(1,100,userNumber));
    const [guessRounds, setGuessRounds] = useState(0);
    useEffect(() => {
        if (opponentGuessNumber === userNumber) {
            gameOverhandler(guessRounds);
        }
    }, [opponentGuessNumber, gameOverhandler, userNumber])

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const handleOnGuess = (direction) => {
        if ((direction === 'smaller' && opponentGuessNumber < userNumber) || (direction === 'greater' && opponentGuessNumber > userNumber)) {
            Alert.alert('Don\'t cheat!', 'You know that\'s incorrect...!', [{text: 'Okay', style: 'destructive'}]);
            return;
        } else if (direction === 'smaller') {
            currentHigh.current = opponentGuessNumber;
        } else {
            currentLow.current = opponentGuessNumber;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, opponentGuessNumber);
        setGuessNumber(nextNumber);
        setGuessRounds(currentRound => currentRound + 1);
    };

    return (
        <View style={styles.container}>
            <Card customStyle={styles.card}>
                <Text style={styles.title}>Opponets Guess</Text>
                <NumberContainer style={styles.numberStyle}>{opponentGuessNumber}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button, borderRightColor: colors.primaryGrey, borderRightWidth: 1}}><Button title="SMALLER" color={colors.primaryBlue} onPress={handleOnGuess.bind(this, 'smaller')}/></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Button title="GREATER" color={colors.primaryBlue} onPress={handleOnGuess.bind(this, 'greater')}/></TouchableOpacity>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryGrey,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.primaryBlue,
        fontSize: 20,
        fontWeight: '700'
    },  
    buttonContainer: {
        flexDirection: "row",
    },
    numberStyle: {
        color: colors.primaryGrey,
        backgroundColor: colors.primaryBlue,
    },
    card: {
        backgroundColor: colors.primaryRed,
        width: '80%',
        alignItems: "center",
        marginVertical: 40,
        paddingTop: 20
    },
    button: {
        flex: 1
    }
});

export default GameScreen;
