import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

import colors from './constants/colors';

export default function App() {
  const [ userNumber, setGameStarted] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  let activeScreen = <StartGameScreen setGameStarted={setGameStarted}/>;

  const handleGoToHome = () => {
    setGameStarted();
    setNumberOfRounds(0);
  }

  const gameOverhandler = (rounds) => {
    setNumberOfRounds(rounds)
  }

  if (userNumber && numberOfRounds <=0) {
    activeScreen = <GameScreen userNumber={userNumber} gameOverhandler={gameOverhandler}/>
  } else if (numberOfRounds > 0) {
    activeScreen = <GameOverScreen handleGoToHome={handleGoToHome} userNumber={userNumber} numberOfRounds={numberOfRounds} />
  }

  return (
    <View style={styles.container}>
      <Header title="Guess The Number" />
        {activeScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryGrey,
  },
});
