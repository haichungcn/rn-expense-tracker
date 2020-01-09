import React from 'react'
import { View, Text, Button } from 'react-native'

const ExpenseListScreen = ({ currentUser, setContent }) => {
    return (
        <View>
            <Text>Expense List</Text>
            <Button title="Go to Main" onPress={() => setContent('login')} />
        </View>
    )
}

export default ExpenseListScreen
