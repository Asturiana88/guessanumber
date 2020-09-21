import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Card from '../components/Card'
import Color from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {

const [inputNumber, setInputNumber] = useState('')
const [chosenNumber, setChosenNumber] = useState('')
const [confirmed, setConfirmed] = useState(false)

const numberInputHandler = inputNum =>{
    setInputNumber(inputNum.replace(/[^0-9]/g, ''))
}

const reserInputHandler = () =>{
    setInputNumber('')
    setChosenNumber('')
    setConfirmed(false)
}

const confirmInputHandler = () =>{
    const cnumber = parseInt(inputNumber)
    if (isNaN(cnumber) || cnumber <= 0 || cnumber > 99) {
        Alert.alert("Invalid Number", " Only numbers between 1 and 99", [{text:'OK', style:'destructive', onPress:reserInputHandler}])
    }
    else{
        setChosenNumber(inputNumber);
        setConfirmed(true);
        Keyboard.dismiss();
    };
}

// const _renderConfirmedOutput = () =>{
//     if (confirmed){
//          return (
//             <Card style={styles.summaryContainer}>
//                 <Text>You selected</Text>
//                 <NumberContainer>{chosenNumber}</NumberContainer>
//                 <Button title='START GAME'/>
//             </Card>
//         );
//     }
// }

    return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
            <Text>Select a number</Text>
            <Input style={styles.input} maxLength={2} keyboardType='number-pad' onChangeText={numberInputHandler} value={inputNumber}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Reset" onPress={reserInputHandler} color={Color.accent}/>
                </View>
                <View style={styles.button}>
                    <Button title="Confirm" onPress={confirmInputHandler} color={Color.primary}/>
                </View>
            </View>
        </Card>
        {/* {_renderConfirmedOutput()} */}
        {confirmed &&
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{chosenNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(chosenNumber)}>
                  START GAME
                </MainButton>
            </Card>
        }
    </View>
    </TouchableWithoutFeedback>)
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
        //fontFamily:'open-sans-bold'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300,
        maxWidth: '80%',
        alignItems:'center'
    },
    button:{
        width:80
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }
})

export default StartGameScreen
