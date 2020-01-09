import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import INITIAL_USER_DATA from './users.data';

import LogInScreen from './screens/log-in/log-in.screen'
import SignUpScreen from './screens/sign-up/sign-up.screen';

export default function App() {
  const [users, setUsers] = useState(INITIAL_USER_DATA)
  const [currentUser, setCurrentUser] = useState(null)
  const [content, setContent] = useState('login')

  console.log('users', users)
  console.log('currentUser', currentUser)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💵 EXPENSE TRACKER 💵</Text>
      {content === 'login'
        ? <LogInScreen users={users} setCurrentUser={setCurrentUser} setContent={setContent} />
        : content === 'signup'
          ? <SignUpScreen users={users} setUsers={setUsers} setContent={setContent} />
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading : {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
});
