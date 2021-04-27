import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function Ballot({ navigation }) {


    const [choice, setChoice] = useState("");
    const [phone, setPhone] = useState("");
    const [candidates, setCandidates] = useState([
        'Partido A',
        'Partido B',
        'Partido C',
        'Partido D'
    ]);
    const [codes, setCodes] = useState([]);

    const sealBallot = () => {
        // encrypt the ballot using some randomness variables,
        // THEN attempt to authenticate onSubmit, prompt confirmation
        // If authentication succesful, submit ballot to server
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>This is your Ballot. Take your time to choose.</Text>
            <TextInput placeholder="">Some input</TextInput>
            <Button
                title="Proceder a sellar mi Voto"
                onPress={() => navigation.navigate("SealedBallot")} />
        </View>
    )
}
