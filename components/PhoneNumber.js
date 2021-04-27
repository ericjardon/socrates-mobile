import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function PhoneNumber({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Pantalla de Voto Sellado</Text>
            <Button
                title="Continuar a Boleta"
                onPress={() => navigation.navigate("Ballot")} />
        </View>
    )
}
