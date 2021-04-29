import React, { useState, useEffect } from 'react'
import { Text, View, Button, Image } from 'react-native'
import s from '../style'
import encrypt from '../encryptRSA'


export default function Start({ navigation }) {
    console.log("All good", encrypt);
    // navigation.navigate("Disclaimer")
    return (
        <View style={s.container}>
            <View style={s.titleContainer}>
                <Text style={s.title}>Bienvenido al Sistema de Votación Electrónico.</Text>
            </View>

            <View style={{ margin: 20 }}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={require('../assets/images/caja.png')}
                />
            </View>

            <View style={s.buttonContainer}>
                <Button
                    style={s.button}
                    title="Siguiente"
                    onPress={() => navigation.navigate("Elementos")} />
            </View>
        </View>
    )
}