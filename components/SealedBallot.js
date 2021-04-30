import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'
import encrypt from '../encryptRSA'

// Página que se muestra después de dar en Sellar mi voto.
// Aquí aparecen opciones para ver el hash, y para hacer submit del voto.
// Se envía al Back: {tel: , encryptedVote: , oneTimeCode:,}


export default function SealedBallot({ navigation, route }) {

    const {cve, choice, vCode, phone} = route.params;
    console.log("Received", cve, phone, choice, vCode);

    const [encryptedVote, setEncryptedVote] = useState("")

    useEffect(()=> {
        console.log("EFFECT Sealing");
        console.log(choice);
        const encryption = encrypt(choice);

        setEncryptedVote(encryption);

        // generate a hash of date+cve+choice and pass to next route

    },[]);

    return (
        <View style={s.container}>
            <View style={s.titleContainer}>
                <Text style={s.title}>Sistema de Votacion Electoral</Text>
            </View>
            <View style={s.subtitleContainer}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>Tu voto ha sido encriptado con éxito.{"\n\n"}</Text>
                Nadie, nisiquiera los funcionarios electorales, pueden verlo.{"\n"}
                Toda la información personal asociada a él es eliminada antes de llegar al sistema de conteo y ser desencriptado.
                {"\n\n"}
                Para poder emitirlo, autentifícate con tu huella digital.
            </Text>
            </View>
            <View style={s.buttonContainer}>
                <Button
                    title="Proceder a huella digital"
                    onPress={() => navigation.navigate("Auth", {voteDecision: encryptedVote, phoneNum:phone, confirmationNumber:vCode})} />
            </View>
        </View>
    )
}
