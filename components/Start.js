import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'


export default function Start({ navigation }) {

    const [choice, setChoice] = useState("");
    const [phone, setPhone] = useState("");
    const [candidates, setCandidates] = useState([]);
    const [codes, setCodes] = useState([]);



    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title="Comienza a Votar"
                onPress={() => navigation.navigate("Ballot")} />
        </View>
    )
}
