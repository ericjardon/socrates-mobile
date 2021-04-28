import React, { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import s from '../style'

// Al hacer submit, se muestra esta pantalla para hacer la autenticación del voto

export default function Auth({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Necesitamos autenticar que eres tú.
                Utiliza tu huella digital.</Text>
            <Image
                style={{ width: "50%" }}
                source={{ uri: '../assets/icon.png' }}
            />
            <Button
                title="Siguiente"
                onPress={() => navigation.navigate("Confirmation")} />
        </View>
    )
}
