import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
//import * as Font from 'expo-font'
//import {AppLoading} from 'expo'

// const fetchFonts = ()=>{
//   return Font.loadAsync({
//     'open-sans-Bols': require('./assets/fonts/OpenSans-Bols.ttf'),
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
//   })
// }

export default function App() {

  const [userNumber, setUserNumber] = useState()  
  const [guessRounds, setguessRounds] = useState(0)   
 // const [dataLoader, setdataLoader] = useState(false) 
  
  // if(!dataLoader){
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts} 
  //       onFinish={() => setdataLoader(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   )
  // }

  const newGameHandler = () =>{
    setguessRounds(0)
    setUserNumber(null)
  }
  
  const startGameHandler =  (selectedNumber) =>{
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numberOfRounds =>{
    setguessRounds(numberOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <=0){

    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds >0){
    content = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onRestart={newGameHandler}/> 
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    }

});
