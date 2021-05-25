import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'

export default function Elementos({ navigation }) {
    // Para este punto se limpia la información local guardada en la aplicación:
    // el número de teléfono, el numero de credencial, 
    return (
        <View style={s.container}>
            <View style={s.titleContainer}>
                <Text style={s.title}>
                    Sistema de Votación Electrónico</Text>
            </View>
            <View style={{ marginTop: '15%', width: '90%' }}>
                <Text style={{ fontSize: 18 }}>
                    <Text style={{ fontWeight: "bold" }}>1.</Text> Ingresa tu clave de elector para acceder a la boleta.{"\n"}
                    <Text style={{ fontWeight: "bold" }}>2.</Text> (Opcional) Ingresa un número de celular con el que podrás validar que tu voto fue emitido correctamente.{"\n"}
                    <Text style={{ fontWeight: "bold" }}>3.</Text> Elige y encripta tu voto con llave asimétrica.{"\n"}
                    <Text style={{ fontWeight: "bold" }}>4.</Text> Autentifica tu identidad con tu huella digital para enviar tu voto al sistema de conteo.{"\n"}
                    <Text style={{ fontWeight: "bold" }}>5.</Text> Puedes votar cuantas veces quieras. Solo el último voto emitido será tomado en cuenta.{"\n"}
                </Text>
            </View>            
            <View style={{ backgroundColor: '#87CEFA', marginTop: '20%' }}>
                <Button
                    title="Aceptar"
                    onPress={() => navigation.navigate("CardID")} />
            </View>
        </View>
    )
}
