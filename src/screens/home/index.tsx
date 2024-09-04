import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from './styles';

export default function Home() {
    const [participants, setParticipants] = useState() // [estado, função que atualiza o estado]


    // setParticipants(prevState => [...prevState, 'Ana']);

    function handleParticipantAdd() {

    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Quarta-feira, 28 de Agosto de 2024</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#6B6B6B'
                // keyboardType="" 
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />

                )}
            /> */}
        </View>
    )
}