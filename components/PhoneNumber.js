import React, { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import s from '../style'

export default function PhoneNumber({ navigation, route }) {

    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("(OPCIONAL)");
    const { cve } = route.params;  // clave elector

    console.log("Past cve", cve);

    const navigateNext = (name) => {
        console.log("Navigate Next", name);
        if (phone.trim() !== '' && phone.length != 10) {
            setMessage("Introduce 10 dígitos")
            return;
        } else {
            setMessage("(OPCIONAL)");
        }
        console.log("Navigating next");
        navigation.navigate(name, { phone, cve });
    }


    return (
        <View style={s.container} >
            <View style={s.titleContainer}>
                <Text style={s.title}>
                    Sistema de Votación Electrónico
                </Text>
            </View>
            <View style={s.subtitleContainer}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Ingresa tu número celular personal. {"\n"}
                    Después de votar recibirás por SMS un código de única vez para confirmar
                    que tu voto fue <Text style={{ fontWeight: "bold" }}>emitido correctamente</Text>.</Text>
            </View>

            <View>
                <Image
                    style={{ width: 220, height: 220, margin: 20 }}
                    source={require('../assets/verificode.jpg')}
                />
            </View>

            <View style={s.inputcontainer}>
                <TextInput
                    style={s.input}
                    placeholder="5544332211"
                    onChangeText={(value) => setPhone(value)}
                    value={phone} />
            </View>
            <Text style={{ textAlign: 'center' }}>{message}</Text>
            <View style={s.buttonContainer}>
                <Button
                    title="Continuar a Boleta"
                    onPress={() => navigateNext("Ballot", { cve, phone })} />
            </View>
        </ View>
    )
}
