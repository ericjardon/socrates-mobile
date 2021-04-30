import React, { useState, useEffect } from 'react'
import { Text, View, Button, Image } from 'react-native'
import s from '../style'
import axios from 'axios'


export default function Start({ navigation }) {

    return (
        <View style={s.container}>
            <View style={{
                width: '100%',
                paddingHorizontal: 8,
                marginTop: '20%',
                marginBottom: '20%',
                alignItems: 'center',
            }}>
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
                    title="Iniciar"
                    onPress={() => navigation.navigate("Elementos")} />
            </View>
        </View>
    )
}