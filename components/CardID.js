import React, { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import s from '../style'


export default function CardID({ navigation }) {
    return (
        <View style={s.container}>
            <View style={s.titleContainer}>
                <Text style={s.title}>
                    Sistema de Votación Electrónico
                </Text>
            </View>
            <View style={s.subtitleContainer}>
                <Text style={s.subtitle}>Ingresa tu clave de elector, la cual se encuentra {"\n"}
                en la parte frontal de tu credencial como se muestra. </Text>
            </View>
            <View style={{ marginVertical: '10%' }}>
                <Image
                    style={{ width: 320, height: 200, resizeMode: 'stretch' }}
                    source={require('../assets/CVE2.png')}
                />
            </View>
            <View style={s.inputcontainer}>
                <TextInput
                    style={{ fontSize: 28, width: 300, textAlign: 'center' }}
                    placeholder="GMVLMR8007050"
                    keyboardType="numeric"
                />
            </View>
            <View style={s.buttonContainer}>
                <Button
                    title="Siguiente"
                    onPress={() => navigation.navigate("PhoneNumber")} />
            </View>
        </View>
    )
}
