import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import FormInput from "../../components/form-input/form-input.component";
import AverageExpense from '../../components/average-expense/average-expense.component';

const MainScreen = ({ setCurrentUser, currentUser, setContent }) => {
    const [input, setInput] = useState({ title: "", amount: 1000 });
    let expenses = currentUser.expenses

    const numberFormat = value =>
        new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND"
        }).format(value);

    const handleChange = (name, value) => {
        setInput({
            ...input,
            [name]: !value ? 1000 : value
        });
    };

    const handleSaveNewExpense = () => {
        let newCount = currentUser.expenses.count + 1 
        setCurrentUser({
            ...currentUser,
            expenses: {
                ...expenses,
                count: newCount,
                [newCount]: {
                    id: newCount,
                    title: input.title,
                    amount: input.amount,
                    timestamp: new Date()
                },
        }})
        setInput({ title: "", amount: 1000 })
    }

    const calculateAverage = () => {
        console.log('runninnnngnggg')
        let today = new Date().toLocaleString().split(',')[0]
        console.log(today)
        let todayExpenses = Object.keys(expenses).map(expense => console.log(new Date(expense.timestamp).toLocaleString().split(',')[0]))
        return 3330
    }

    console.log("current user's expenses", currentUser.expenses)

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome {currentUser.email} !</Text>
            <View>
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                    Enter new expense to save:
                </Text>
                <FormInput
                    name={"title"}
                    textContentType="none"
                    label="Title"
                    autoFocus={true}
                    textAlign="center"
                    value={input.title}
                    handleChange={handleChange}
                />
                <FormInput
                    name={"amount"}
                    textContentType="none"
                    label="Amount"
                    keyboardType="number-pad"
                    textAlign="center"
                    value={input.amount}
                    handleChange={handleChange}
                />
                <Text style={styles.unit}>USD</Text>
            </View>
            <Button
                style={styles.button}
                title="Save"
                onPress={handleSaveNewExpense}
            />
            <AverageExpense amount={calculateAverage} />
            <Button
                style={styles.button}
                title="Expense List"
                onPress={() => setContent('expenselist')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 20,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        fontSize: 20,
        marginBottom: 30
    },
    unit: {
        fontSize: 20,
        color: 'gray',
        position: 'relative',
        top: -50,
    },
    buttons: {
        marginTop: 20,
        flexDirection: "row",
        width: "73%"
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3,
        borderColor: "gray",
        marginVertical: 20,
    }
});

export default MainScreen;
