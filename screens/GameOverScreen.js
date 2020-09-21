import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import MainButton from '../components/MainButton'

export default function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>The game is Over!</Text>
            <View style={styles.imageContainer}>
            {/* <Image style={styles.image} resizeMode='cover' source={require('../assets/success.png')}/>   */}
            <Image style={styles.image} resizeMode='cover' fadeDuration={1000} source={{uri:'https://everestwithoutoxygen.files.wordpress.com/2017/06/img_6881.jpg'}}/>  
            </View>
            <Text>Number of rounds: {props.roundNumber}</Text>
            <Text>The number was: {props.userNumber}</Text>
            <MainButton onPress={props.onRestart}>
              NEW GAME
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30
    }

})
