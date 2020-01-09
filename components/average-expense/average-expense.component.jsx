import React from 'react'
import { View, Text } from 'react-native'

const AverageExpense = ({ amount}) => (
    <View>
        <Text>Average expense of the day:</Text>
        <Text style={{color: 'red', fontWeight: 'bold'}}>
            {amount}
        </Text>
    </View>
)

export default AverageExpense
