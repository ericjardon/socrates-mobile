import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'


export default function CardID({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Pantalla de Número de Credencial</Text>
            <Button
                title="Ingresa el número de tu credencial para votar."
                onPress={() => navigation.navigate("PhoneNumber")} />
        </View>
    )
}
