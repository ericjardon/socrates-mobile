import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'


export default function Disclaimer({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>
                Para validar tu identidad necesitamos tu número de
                credencial de elector, tu huella digital, acceso a tu cámara frontal,
                y un número de celular con el que podrás verificar que tu voto fue emitido correctamente.
            </Text>
            <Button
                title="Aceptar"
                onPress={() => navigation.navigate("CardID")} />
        </View>
    )
}
