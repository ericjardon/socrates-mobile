import React, { useState, useEffect } from 'react'
import { Text, View, Button, Image } from 'react-native'
import s from '../style'
import encrypt from '../encryptRSA'
import axios from 'axios'


export default function Start({ navigation }) {
    console.log("All good", encrypt);
    // navigation.navigate("Disclaimer")
    const test = () => {
        console.log("Test cloud function...");
        const data = {
            phone: '44556677',
            encryption: 'Hello world',
            ret_code: 'my-code',
        }
        const endpoint = 'https://us-south.functions.appdomain.cloud/api/v1/web/nopassword%40nuke.africa_dev/default/Log2God';
        axios.post(endpoint, data).then(res => {
            console.log("All good\n", res);
        }).catch(err => {
            console.log("Error:", err);
        })
    }

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
                    onPress={() => test()} />
            </View>
        </View>
    )
}