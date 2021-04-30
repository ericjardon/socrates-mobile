import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'


export default function Disclaimer({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>
                Para autentificar tu identidad necesitaremos tu clave de elector, tu huella digital
                y opcionalmente un número de celular con el que podrás validar que tu voto fue emitido correctamente.
            </Text>
            <Button
                title="Aceptar"
                onPress={() => navigation.navigate("CardID")} />
        </View>
    )
}
