import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import FormInput from "../../components/form-input/form-input.component";

const SignUpScreen = ({ users, setUsers, setCurrentUser, setContent }) => {
    const [input, setInput] = useState({ email: "", password: "" });

    const handleChange = (name, value) => {
        setInput({
            ...input,
            [name]: name === 'email' ? value.toLowerCase() : value
        });
    };

    const handleSubmitSignUp = () => {
        if (!users.hasOwnProperty(input.email) && input.password) {
            let newUser = {
                id: users.count + 1,
                email: input.email,
                password: input.password,
                expenses: {count: 0}
            }
            setUsers({
                ...users,
                count: users.count + 1,
                [input.email]: newUser
            });
            Alert.alert('Successfully Signed Up');
            setContent('login')
            setCurrentUser(newUser)
        } else {
            Alert.alert("This email address is already taken, please try login.");
            setContent('login')
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Create an account</Text>
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
                    onPress={handleSubmitSignUp}
                />
                <Button
                    style={styles.button}
                    title="Login"
                    onPress={() => setContent('login')}
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

export default SignUpScreen;
