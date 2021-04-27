import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function Confirmation({ navigation }) {
    // Para este punto se limpia la información local guardada en la aplicación:
    // el número de teléfono, el numero de credencial, 
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Pantalla de Confirmación de voto. Aquí se everifica el SMS</Text>
            <Button
                title="Terminar y regresar a Inicio"
            />
        </View>
    )
}
