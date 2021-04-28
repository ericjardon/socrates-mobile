import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'

export default function PhoneNumber({ navigation }) {

    const [phone, setPhone] = useState("");

    const navigateNext = (name) => {
        console.log("Navigate Next", name);
        if (phone.trim() === '' || phone.length != 10) {
            console.log("No phone");
            return;
        }
        console.log("Navigating next");
        navigation.navigate(name);
    }

    return (
        <View style={s.container} >
            <View style={s.pageContainer}>
                <View style={s.titleContainer}>
                    <Text style={s.title}>Sistema de Votación Electrónico</Text>
                </View>

                <View style={s.bodyContainer}>
                    <TextInput
                        style={s.input}
                        onChangeText={(value) => setPhone(value)}
                        value={phone} />
                    <View
                        style={s.button}>
                        <Button
                            title="Continuar a Boleta"
                            onPress={() => navigateNext("Ballot")} />
                    </View>
                </View>

            </View>
        </ View>
    )
}
