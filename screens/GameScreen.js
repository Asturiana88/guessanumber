import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import {Ionicons} from '@expo/vector-icons'


const generateRandomBetween = (min,max,exclude) =>{
   min=  Math.ceil(min) 
   max= Math.floor(max)
   const rndmNum= Math.floor(Math.random()*(max-min)) + min
   if(rndmNum === exclude){
       return generateRandomBetween(min,max,exclude)
   } else { return rndmNum}
}

const renderListItem = (value,numOfRound) => (
    <View key={value} style={styles.listItem}>
     <Text>#{numOfRound}</Text>
     <Text>{value}</Text>
    </View>
)

const GameScreen = props => {

const initialGuess = generateRandomBetween(1,100,userChoice)
const [currentGuess, setcurrentGuess] = useState(initialGuess)

const [pastGuesses, setPassGuesses] = useState([initialGuess])
const currentLow = useRef(1)
const currentHigh = useRef(100)

const {userChoice, onGameOver} = props;

useEffect(()=>{
    if(currentGuess == userChoice){
        onGameOver(pastGuesses.length)
    }
}, [currentGuess, userChoice, onGameOver])

const nextGuessHandler = direction => {
    if(
        (direction === 'lower' && currentGuess < userChoice) || 
        (direction === 'greater' && currentGuess > userChoice)
    )
        {
          Alert.alert('Dont Lie!!', 'lierrr', [{text: 'Sorry', style: 'cancel'}]);    
          return;
        }  
    else if(direction === 'lower'){
        currentHigh.current = currentGuess;
    } else {
        currentLow.current = currentGuess +1;
    }
   const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
   setcurrentGuess(nextNumber)
   //setPassGuesses(curRounds => curRounds+1)
   setPassGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])
}

return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color="white"/>   
            </MainButton>
            <MainButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name="md-add" size={24} color="white"/>  
            </MainButton>
        </Card>
            <View style={styles.listContainer}>
              <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
              </ScrollView>
            </View>   
    </View>
)
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    },
    list:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    listContainer:{
        width:'80%',
        flex:1
    },
    listItem:{
        borderColor:'#ccc',
        borderWidth:1,
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'60%'
    }
})

export default GameScreen;