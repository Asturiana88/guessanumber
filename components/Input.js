import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.styles}}/>
}

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingHorizontal:20
    }
})


export default Input;