import React from 'react'

import { 
    StyleSheet,
    TextInput
} from 'react-native'

const FormInput = ({ label, handleChange, name, ...otherProps }) => (
    <TextInput
        placeholder={label}
        style={styles.input}
        onChangeText={(value) => handleChange(name, value)}
        {...otherProps}
    />
)

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 5,
        width: 300,
        fontSize: 20,
        letterSpacing: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'lightblue',
        marginVertical: 15,
    },
})

export default FormInput
