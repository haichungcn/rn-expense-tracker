import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import FormInput from "../../components/form-input/form-input.component";

const MainScreen = ({ currentUser }) => {
    const [input, setInput] = useState({ email: "", password: "" });

    const handleChange = (name, value) => {
        setInput({
            ...input,
            [name]: value
        });
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Main Screen</Text>
            <Text>
                Welcome {currentUser.email} !
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        marginBottom: 30
    },
    buttons: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "73%"
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3,
        borderColor: "gray"
    }
});

export default MainScreen;
