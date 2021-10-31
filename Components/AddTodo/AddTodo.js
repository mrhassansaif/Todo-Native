import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Icon, Button } from 'react-native-elements'

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='add new todo...'
                onChangeText={(changeHandler)}
            />

            <Button onPress={() => submitHandler(text)} title=' Add' buttonStyle={{ backgroundColor: "black" }} icon={
                <Icon
                    name='plus'
                    type='evilicon'
                    color='white'
                />
            } />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

})
