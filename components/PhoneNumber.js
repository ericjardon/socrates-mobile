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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{}}>
                <Text style={s.title}>Sistema de Votación Electrónico</Text>
            </View>
            <TextInput
                onChangeText={(value) => setPhone(value)}
                value={phone} />
            <Button
                title="Continuar a Boleta"
                onPress={() => navigateNext("Ballot")} />
        </View>
    )
}
