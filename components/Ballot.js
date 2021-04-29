import color from 'color';
import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import { Card, Icon, CardContent } from 'react-native-elements'


export default function Ballot({ navigation }) {
    const sealBallot = () => {
        // encrypt the ballot using some randomness variables,
        // THEN attempt to authenticate onSubmit, prompt confirmation
        // If authentication succesful, submit ballot to server
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', width: 'auto', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 20 }}>Elige al candidato</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    <Card bg="primary" containerStyle={{ padding: 0, width: 180, height: 180 }}>
                        <Card.Title style={{ fontSize: 6, backgroundColor: 'black', color: 'white', marginTop: 5, textAlign: 'center' }} > PARTIDO DE LA REVOLUCION DEMOCRATICA</Card.Title>
                        <Card.Divider />
                        <View style={{ justifyContent: 'flex-start', display: "flex", flexDirection: "row" }}>
                            <Card containerStyle={{ padding: 0, width: 70, height: 70, margin: 5, marginTop: 15 }}>

                                <Card.Image style={{ width: 70, height: 70 }} source={require('../assets/images/prd.png')}>

                                </Card.Image>
                            </Card>
                            <Card containerStyle={{ padding: 13, width: 85, height: 75, marginLeft: 2, marginBottom: 5 }}>
                                <Text style={{ fontSize: 8, textAlign: 'center' }}>
                                    Candidato A
                                            </Text>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: 'blue', color: 'white' }}>
                            <Button
                                buttonStyle={{ Color: 'white' }}
                                title='Votar'
                                color="white"
                                width='10'
                            />
                        </View>
                    </Card>
                    <Card bg="primary" containerStyle={{ padding: 0, width: 180, height: 180 }}>
                        <Card.Title style={{ fontSize: 6, backgroundColor: 'black', color: 'white', marginTop: 5, textAlign: 'center' }} > PARTIDO DE LA REVOLUCION DEMOCRATICA</Card.Title>
                        <Card.Divider />
                        <View style={{ justifyContent: 'flex-start', display: "flex", flexDirection: "row" }}>
                            <Card containerStyle={{ padding: 0, width: 70, height: 70, margin: 5, marginTop: 15 }}>

                                <Card.Image style={{ width: 70, height: 70 }} source={require('../assets/images/pan.png')}>

                                </Card.Image>
                            </Card>
                            <Card containerStyle={{ padding: 13, width: 85, height: 75, marginLeft: 2, marginBottom: 5 }}>
                                <Text style={{ fontSize: 8, textAlign: 'center' }}>
                                    Candidato B
                                            </Text>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: 'blue', color: 'white' }}>
                            <Button
                                buttonStyle={{ Color: 'white' }}
                                title='Votar'
                                color="white"
                                width='10'
                            />
                        </View>
                    </Card>

                    <Card bg="primary" containerStyle={{ padding: 0, width: 180, height: 180 }}>
                        <Card.Title style={{ fontSize: 6, backgroundColor: 'black', color: 'white', marginTop: 5, textAlign: 'center' }} > PARTIDO DE LA REVOLUCION DEMOCRATICA</Card.Title>
                        <Card.Divider />
                        <View style={{ justifyContent: 'flex-start', display: "flex", flexDirection: "row" }}>
                            <Card containerStyle={{ padding: 0, width: 70, height: 70, margin: 5, marginTop: 15 }}>

                                <Card.Image style={{ width: 70, height: 70 }} source={require('../assets/images/pri.png')}>

                                </Card.Image>
                            </Card>
                            <Card containerStyle={{ padding: 13, width: 85, height: 75, marginLeft: 2, marginBottom: 5 }}>
                                <Text style={{ fontSize: 8, textAlign: 'center' }}>
                                    Candidato C
                                            </Text>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: 'blue', color: 'white' }}>
                            <Button
                                buttonStyle={{ Color: 'white' }}
                                title='Votar'
                                color="white"
                                width='10'
                            />
                        </View>
                    </Card>
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    <Card bg="primary" containerStyle={{ padding: 0, width: 180, height: 180 }}>
                        <Card.Title style={{ fontSize: 6, backgroundColor: 'black', color: 'white', marginTop: 5, textAlign: 'center' }} > PARTIDO DE LA REVOLUCION DEMOCRATICA</Card.Title>
                        <Card.Divider />
                        <View style={{ justifyContent: 'flex-start', display: "flex", flexDirection: "row" }}>
                            <Card containerStyle={{ padding: 0, width: 70, height: 70, margin: 5, marginTop: 15 }}>

                                <Card.Image style={{ width: 70, height: 70 }} source={require('../assets/images/verde.png')}>

                                </Card.Image>
                            </Card>
                            <Card containerStyle={{ padding: 13, width: 85, height: 75, marginLeft: 2, marginBottom: 5 }}>
                                <Text style={{ fontSize: 8, textAlign: 'center' }}>
                                    Candidato D
                                            </Text>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: 'blue', color: 'white' }}>
                            <Button
                                buttonStyle={{ Color: 'white' }}
                                title='Votar'
                                color="white"
                                width='10'
                            />
                        </View>
                    </Card>

                    <Card bg="primary" containerStyle={{ padding: 0, width: 180, height: 180 }}>
                        <Card.Title style={{ fontSize: 6, backgroundColor: 'black', color: 'white', marginTop: 5, textAlign: 'center' }} > PARTIDO DE LA REVOLUCION DEMOCRATICA</Card.Title>
                        <Card.Divider />
                        <View style={{ justifyContent: 'flex-start', display: "flex", flexDirection: "row" }}>
                            <Card containerStyle={{ padding: 0, width: 70, height: 70, margin: 5, marginTop: 15 }}>

                                <Card.Image style={{ width: 70, height: 70 }} source={require('../assets/images/morena.png')}>

                                </Card.Image>
                            </Card>
                            <Card containerStyle={{ padding: 13, width: 85, height: 75, marginLeft: 2, marginBottom: 5 }}>
                                <Text style={{ fontSize: 8, textAlign: 'center' }}>
                                    Candidato E
                                            </Text>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: 'blue', color: 'white' }}>
                            <Button
                                buttonStyle={{ Color: 'white' }}
                                title='Votar'
                                color="white"
                                width='10'
                            />
                        </View>
                    </Card>
                    <Card bg="primary" containerStyle={{ padding: 0, width: 180, height: 180 }}>
                        <Card.Title style={{ fontSize: 6, backgroundColor: 'black', color: 'white', marginTop: 5, textAlign: 'center' }} >
                            Anular Voto</Card.Title>
                        <Card.Divider />
                        <View style={{ justifyContent: 'flex-start', display: "flex", flexDirection: "row" }}>
                            <Card containerStyle={{ padding: 0, width: 70, height: 70, margin: 5, marginTop: 15 }}>

                                <Card.Image style={{ width: 70, height: 70 }} source={require('../assets/images/cerca.png')}>

                                </Card.Image>
                            </Card>
                            <Card containerStyle={{ padding: 13, width: 85, height: 75, marginLeft: 2, marginBottom: 5 }}>
                                <Text style={{ fontSize: 8, textAlign: 'center' }}>
                                    Anulación de voto
                                            </Text>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: 'blue', color: 'white' }}>
                            <Button
                                buttonStyle={{ Color: 'white' }}
                                title='Votar'
                                color="white"
                                width='10'
                            />
                        </View>
                    </Card>
                </View>

            </View>
            <View style={{ width: "80%", marginTop: '5%' }}><Text style={{ textAlign: 'center' }}>Cuando estés listo, presiona "sellar mi voto" para encriptar tu selección
                 y proceder a la autentificación.</Text>
            </View>
            <View style={{ position: 'absolute', bottom: "5%", width: 150 }}>
                <Button
                    title="Sellar mi Voto"
                    onPress={() => navigation.navigate("SealedBallot")} />
            </View>
        </View>
    )
}


