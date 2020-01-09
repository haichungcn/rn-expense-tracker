import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import FormInput from "../../components/form-input/form-input.component";

const LogInScreen = ({ users, setCurrentUser, setContent }) => {
    const [input, setInput] = useState({ email: "", password: "" });

    const handleChange = (name, value) => {
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleSubmitLogin = () => {
        if (users.hasOwnProperty(input.email)) {
            if (input.password === users[input.email].password) {
                setCurrentUser(users[input.email])
                Alert.alert(`Successful Logged In, Welcome ${input.email}`)
            } else
                Alert.alert('Invalid password, please try again')
        } else {
            Alert.alert("Invalid email address, please sign up first.")
            setContent('signup')
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Please login to use the app</Text>
            <View>
                <FormInput
                    name={"email"}
                    textContentType="emailAddress"
                    label="Email"
                    autoCompleteType="email"
                    autoCapitalize='none'
                    autoFocus={true}
                    handleChange={handleChange}
                />
                <FormInput
                    name={"password"}
                    textContentType="password"
                    label="Password"
                    autoCompleteType="password"
                    secureTextEntry={true}
                    handleChange={handleChange}
                />
            </View>
            <View style={styles.buttons}>
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={handleSubmitLogin}
                />
                <Button
                    style={styles.button}
                    title="Sign up"
                    onPress={() => setContent('signup')}
                />
            </View>
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

export default LogInScreen;
