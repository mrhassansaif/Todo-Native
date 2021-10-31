import React from "react";
// import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Jhaakaas Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});