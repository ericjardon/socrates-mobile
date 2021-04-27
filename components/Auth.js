import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'


// Al hacer submit, se muestra esta pantalla para hacer la autenticación del voto

export default function Auth({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Pantalla de Autenticación de huella.</Text>
            <Button
                title="Siguiente"
                onPress={() => navigation.navigate("Confirmation")} />
        </View>
    )
}
