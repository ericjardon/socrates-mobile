import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function Disclaimer() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Para verificar tu identidad y acceder a la Boleta necesitamos acceso a tu cámara digital,
            número de credencial de elector, número telefónico y huella digital.
            </Text>
            <Button
                title="Continuar"
                onPress={() => navigation.navigate("CardID")} />
        </View>
    )
}
