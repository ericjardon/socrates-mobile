import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

// Página que se muestra después de dar en Sellar mi voto.
// Aquí aparecen opciones para ver el hash, y para hacer submit del voto.
// Se envía al Back: {tel: , encryptedVote: , oneTimeCode:,}


export default function SealedBallot({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Pantalla de Voto Sellado</Text>
            <Button
                title="Submit"
                onPress={() => navigation.navigate("Auth")} />
        </View>
    )
}
