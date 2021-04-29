import React, { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import s from '../style'

// Al hacer submit, se muestra esta pantalla para hacer la autenticación del voto

export default function Auth({ navigation }) {
    return (
        <View style={s.container}>
            <View style={s.subtitleContainer}>
                <Text>Necesitamos autenticar que eres tú.
                Utiliza tu huella digital.</Text>
            </View>
            <Image
                style={{ width: 220, height: 220 }}
                source={require('../assets/fingerprint.png')}
            />
            <Button
                title="Siguiente"
                onPress={() => navigation.navigate("Confirmation")} />
        </View>
    )
}
