import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import Color from '../constants/colors'

const MainButton = props => {
    return <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Color.start,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25,
        margin:20
    },
    buttonText:{
        color:'white',
    }
})
export default MainButton;