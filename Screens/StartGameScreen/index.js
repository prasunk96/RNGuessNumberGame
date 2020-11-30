import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../../Components/Card';
import Input from '../../Components/Input';
import NumberContainer from '../../Components/NumberContainer';

import colors from '../../constants/colors';

const StartGameScreen = (props) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const [isConfirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const handleInputChange = (inputValue) => {
        setEnteredNumber(inputValue.replace(/[^0-9]/g, ''));
    }

    const handleReset = () => {
        setEnteredNumber('');
        setConfirmed(false);
    }

    const handleConfirm = () => {
        const choosenNumber = parseInt(enteredNumber);
        if (isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: handleReset}])
            return;
        }
        setConfirmed(true);
        setEnteredNumber('');
        setSelectedNumber(parseInt(enteredNumber))
        Keyboard.dismiss()
    }

    let ConfirmToUserText;

    if(isConfirmed) {
        ConfirmToUserText = (
            <Card customStyle={styles.summaryCard}>
                <Text style={styles.summaryHeading}>You have selected</Text>
                <NumberContainer style={styles.numberStyle}>{selectedNumber}</NumberContainer>
                <TouchableOpacity style={styles.startButton}><Button title="START GAME" color={colors.primaryBlue} onPress={() => props.setGameStarted(selectedNumber)}/></TouchableOpacity>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <View style={styles.header}>
                    <Text style={styles.title}>NEW GAME</Text>
                </View>
                <Card customStyle={styles.inputContainer}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>ENTER A NUMBER</Text>
                        <Input blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" value={enteredNumber}
                            customStyle={styles.textInput} placeholder="Enter Number..." placeholderTextColor={colors.primaryGrey} onChangeText={handleInputChange} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.resetButton}><Button color={colors.primaryRed} title="Reset" onPress={handleReset} /></TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton}><Button color={colors.primaryRed} title="Confirm" onPress={handleConfirm} /></TouchableOpacity>
                    </View>
                </Card>
                {ConfirmToUserText}
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10
    },
    header: {
        marginVertical: 40
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: colors.primaryBlue
    },
    inputContainer: {
        backgroundColor: colors.primaryBlue,
        width: '80%',
        alignItems: "center",
    },
    input: {
        justifyContent: 'center',
        color: colors.primaryGrey,
        width: '100%',
        alignItems: "center",
        padding: 20,
        fontWeight: '700'
    },
    inputLabel: {
        color: colors.primaryGrey,
        fontSize: 18
    },
    textInput: {
        borderBottomColor: colors.primaryGrey,
        borderBottomWidth: 1,
        marginVertical: 30,
        color: colors.primaryGrey
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    resetButton: {
        flex: 1,
        borderRightColor: colors.primaryGrey,
        borderRightWidth: 1,
    },
    confirmButton: {
        flex: 1,
    },
    summaryCard: {
        backgroundColor: colors.primaryRed,
        width: '80%',
        alignItems: "center",
        marginVertical: 40,
        paddingTop: 20
    },
    summaryHeading: {
        color: colors.primaryGrey,
        fontSize: 20,
        fontWeight: '700'
    },
    startButton: {
        width: '100%',
    },
    numberStyle: {
        color: colors.primaryBlue,
        backgroundColor: colors.primaryGrey,
    }
});

export default StartGameScreen;