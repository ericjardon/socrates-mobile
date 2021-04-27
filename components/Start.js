import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'


export default function Start({ navigation }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Pantalla de Start</Text>
            <Button
                title="Comienza a Votar"
                onPress={() => navigation.navigate("CardID")} />
        </View>
    )
}
