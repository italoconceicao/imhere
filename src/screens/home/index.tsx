import React from "react";
import { Text, TextInput, View, } from "react-native";

import { styles } from './styles'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Quarta-feira, 28 de Agosto de 2024</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor='#6B6B6B'
            // keyboardType="" 
            />
        </View>
    )
}