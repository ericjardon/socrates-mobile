import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'


export default function CardID({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' ,display: "flex",flexDirection: "column" ,alignItems: 'center', marginTop: 35}}>
            <View style={{ flex: 1, justifyContent: 'space-between' ,display: "flex",flexDirection: "column" ,alignItems: 'center'}}>
                <Text style={{ textAlign:'center', marginBottom: 10, fontSize:25, marginBottom: 20}}>sistema de Votacion Electoralo</Text>
                <Text style={{ textAlign:'center', marginBottom: 10, fontSize:25,marginBottom: 20}}>Ingresa tu clave de elector</Text>
                <TextInput
                    style={{fontSize:20,marginBottom: 20}}
                    placeholder="UML00123Y"
                    keyboardType="numeric"
                />
                <View style={{ backgroundColor: '#87CEFA', margin: 15}}>
                    <Button
                
                        title="Ingresa el número de tu credencial para votar."
                        color="white"
                        onPress={() => navigation.navigate("PhoneNumber")} />
                </View>
            </View>
        </View>
    )
}
